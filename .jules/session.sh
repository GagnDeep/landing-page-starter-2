#!/usr/bin/env bash
# Drive Jules against this repo from the terminal.
#
#   .jules/session.sh new  <brief.md> [--approve] [--title "..."]
#   .jules/session.sh watch <session-id>
#   .jules/session.sh status
#
# Requires: JULES_API_KEY (jules.google.com/settings), jq, curl.
# The repo must already be connected in the Jules web app — there is no API for
# adding a source.
#
# Exit codes from `watch`, so it composes in a script:
#   0 completed   1 failed   2 needs a human (plan approval or a question)

set -euo pipefail

API="${JULES_API:-https://jules.googleapis.com/v1alpha}"
SOURCE="${JULES_SOURCE:-sources/github/GagnDeep/landing-page-starter-2}"
BRANCH="${JULES_BRANCH:-master}"
LEDGER="${JULES_LEDGER:-.jules/.ledger}"

: "${JULES_API_KEY:?set JULES_API_KEY — get one at jules.google.com/settings}"
command -v jq >/dev/null || { echo "jq is required" >&2; exit 1; }

auth=(-H "X-Goog-Api-Key: $JULES_API_KEY")

cmd_new() {
  local brief="${1:?usage: session.sh new <brief.md> [--approve] [--title \"...\"]}"
  shift || true
  [ -f "$brief" ] || { echo "no such brief: $brief" >&2; exit 1; }

  local approve=false title
  title="$(basename "$brief" .md)"
  while [ $# -gt 0 ]; do
    case "$1" in
      --approve) approve=true; shift ;;          # requirePlanApproval: true
      --title)   title="$2"; shift 2 ;;
      *) echo "unknown flag: $1" >&2; exit 1 ;;
    esac
  done

  # The ledger makes reruns idempotent. Hitting the daily quota mid-batch is
  # normal; double-submitting because of it is not.
  mkdir -p "$(dirname "$LEDGER")"; touch "$LEDGER"
  if grep -qF "$brief"$'\t' "$LEDGER"; then
    echo "already submitted (see $LEDGER): $brief" >&2
    grep -F "$brief"$'\t' "$LEDGER" >&2
    exit 1
  fi

  local resp
  resp=$(jq -n \
    --rawfile prompt "$brief" \
    --arg src "$SOURCE" --arg branch "$BRANCH" --arg title "$title" \
    --argjson approval "$approve" \
    '{prompt: $prompt,
      sourceContext: {source: $src, githubRepoContext: {startingBranch: $branch}},
      title: $title,
      requirePlanApproval: $approval,
      automationMode: "AUTO_CREATE_PR"}' \
    | curl -sf "$API/sessions" -X POST \
        -H "Content-Type: application/json" "${auth[@]}" -d @-)

  local id url
  id=$(jq -r '.id' <<<"$resp")
  url=$(jq -r '.url // empty' <<<"$resp")
  printf '%s\t%s\t%s\n' "$brief" "$id" "$title" >> "$LEDGER"
  echo "queued: $brief -> $id"
  [ -n "$url" ] && echo "        $url"
  $approve && echo "        plan approval required — watch for AWAITING_PLAN_APPROVAL"
}

cmd_watch() {
  local sid="${1:?usage: session.sh watch <session-id>}"
  while :; do
    local state
    state=$(curl -sf "$API/sessions/$sid" "${auth[@]}" | jq -r '.state')
    printf '%s  %s\n' "$(date +%H:%M:%S)" "$state"
    case "$state" in
      COMPLETED)
        curl -sf "$API/sessions/$sid" "${auth[@]}" | jq '.outputs'
        exit 0 ;;
      FAILED)
        echo "FAILED — last activities:" >&2
        curl -sf "$API/sessions/$sid/activities?pageSize=10" "${auth[@]}" | jq '.' >&2
        exit 1 ;;
      AWAITING_PLAN_APPROVAL|AWAITING_USER_FEEDBACK)
        printf '\a'
        echo "NEEDS YOU: $state -> $API/sessions/$sid" >&2
        # AWAITING_USER_FEEDBACK is a defect report on the brief. Answer it, then
        # move the answer into AGENTS.md or the template so it can't be asked again.
        exit 2 ;;
    esac
    sleep 20
  done
}

cmd_status() {
  [ -f "$LEDGER" ] || { echo "no ledger at $LEDGER"; exit 0; }
  while IFS=$'\t' read -r brief sid title; do
    local s
    s=$(curl -sf "$API/sessions/$sid" "${auth[@]}" || echo '{}')
    printf '%-34s %-24s %s\n' \
      "${title:0:34}" "$(jq -r '.state // "?"' <<<"$s")" \
      "$(jq -r '.outputs[]?.pullRequest.url // ""' <<<"$s")"
  done < "$LEDGER"
}

case "${1:-}" in
  new)    shift; cmd_new "$@" ;;
  watch)  shift; cmd_watch "$@" ;;
  status) shift; cmd_status "$@" ;;
  *) sed -n '2,12p' "$0"; exit 1 ;;
esac
