"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type QuestionNode = {
  id: string
  question: string
  yesNode?: string
  noNode?: string
  result?: string
  resultPath?: string
}

const tree: Record<string, QuestionNode> = {
  q1: {
    id: "q1",
    question:
      "Is your business at least 51% owned and controlled by U.S. citizens?",
    yesNode: "q2",
    noNode: "r_none",
  },
  q2: {
    id: "q2",
    question: "Are the owners socially and economically disadvantaged?",
    yesNode: "q3",
    noNode: "q4",
  },
  q3: {
    id: "q3",
    question: "Do you have a personal net worth below the SBA threshold?",
    yesNode: "r_8a",
    noNode: "q4",
  },
  q4: {
    id: "q4",
    question:
      "Is your principal office located in a designated HUBZone and are 35% of your employees residents of a HUBZone?",
    yesNode: "r_hubzone",
    noNode: "q5",
  },
  q5: {
    id: "q5",
    question: "Is the business at least 51% owned and controlled by women?",
    yesNode: "r_wosb",
    noNode: "q6",
  },
  q6: {
    id: "q6",
    question:
      "Is the business at least 51% owned and controlled by one or more service-disabled veterans?",
    yesNode: "r_sdvosb",
    noNode: "r_sb",
  },
  r_none: {
    id: "r_none",
    question: "",
    result:
      "You must be a U.S. citizen-owned business to qualify for these programs.",
  },
  r_8a: {
    id: "r_8a",
    question: "",
    result: "You may qualify for the 8(a) Business Development Program.",
    resultPath: "/guides/8a-certification/",
  },
  r_hubzone: {
    id: "r_hubzone",
    question: "",
    result: "You may qualify for HUBZone Certification.",
    resultPath: "/guides/hubzone-certification/",
  },
  r_wosb: {
    id: "r_wosb",
    question: "",
    result:
      "You may qualify for Women-Owned Small Business (WOSB) Certification.",
    resultPath: "/guides/wosb-certification/",
  },
  r_sdvosb: {
    id: "r_sdvosb",
    question: "",
    result:
      "You may qualify for Service-Disabled Veteran-Owned (SDVOSB) Certification.",
    resultPath: "/guides/sdvosb-certification/",
  },
  r_sb: {
    id: "r_sb",
    question: "",
    result:
      "You may not qualify for specific set-asides, but you can still register as a Small Business on SAM.gov.",
    resultPath: "/guides/sam-gov-registration/",
  },
}

export function DecisionTree() {
  const [currentNodeId, setCurrentNodeId] = useState<string>("q1")
  const currentNode = tree[currentNodeId]

  const handleReset = () => setCurrentNodeId("q1")

  return (
    <div className="mx-auto max-w-2xl rounded-none border border-border bg-card p-10 shadow-sm transition-all duration-300 hover:shadow-md">
      {currentNode.result ? (
        <div className="animate-in space-y-8 text-center duration-500 fade-in zoom-in">
          <div className="font-heading text-3xl font-bold tracking-tight text-foreground">
            {currentNode.result}
          </div>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            {currentNode.resultPath && (
              <Button
                asChild
                size="lg"
                className="rounded-none font-semibold tracking-wider uppercase"
              >
                <a href={currentNode.resultPath}>Read the Guide</a>
              </Button>
            )}
            <Button
              variant="outline"
              size="lg"
              onClick={handleReset}
              className="rounded-none font-semibold tracking-wider uppercase"
            >
              Start Over
            </Button>
          </div>
        </div>
      ) : (
        <div className="animate-in space-y-10 duration-500 fade-in slide-in-from-bottom-4">
          <h3 className="text-center font-heading text-2xl leading-tight font-bold md:text-3xl">
            {currentNode.question}
          </h3>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full rounded-none text-lg font-bold transition-transform active:scale-95 sm:w-32"
              onClick={() =>
                currentNode.yesNode && setCurrentNodeId(currentNode.yesNode)
              }
            >
              Yes
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full rounded-none text-lg font-bold transition-transform active:scale-95 sm:w-32"
              onClick={() =>
                currentNode.noNode && setCurrentNodeId(currentNode.noNode)
              }
            >
              No
            </Button>
          </div>
        </div>
      )}

      <noscript>
        <div className="mt-8 border border-border bg-muted p-6 text-sm">
          <p className="mb-3 font-heading text-lg font-bold">
            Static Fallback (JavaScript Disabled):
          </p>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Are you socially/economically disadvantaged? See 8(a).</li>
            <li>Are you in a HUBZone? See HUBZone.</li>
            <li>Are you women-owned? See WOSB.</li>
            <li>Are you a service-disabled veteran? See SDVOSB.</li>
          </ul>
        </div>
      </noscript>
    </div>
  )
}
