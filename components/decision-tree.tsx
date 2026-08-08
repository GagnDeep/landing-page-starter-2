"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Node {
  id: string
  question: string
  options: { label: string; nextId: string }[]
}

interface Result {
  id: string
  title: string
  body: string
  actionLabel: string
  actionUrl: string
}

const TREE_NODES: Record<string, Node> = {
  start: {
    id: "start",
    question: "What is your primary commercial aerospace objective?",
    options: [
      { label: "Secure Federal Commercial Contracts", nextId: "sam_gov" },
      { label: "Establish Facility Identification", nextId: "cage_code" },
      {
        label: "Leverage Disadvantaged/Veteran Status",
        nextId: "special_status",
      },
    ],
  },
  special_status: {
    id: "special_status",
    question: "Which operational status applies to your venture?",
    options: [
      { label: "Service-Disabled Veteran Owned", nextId: "sdvosb" },
      { label: "Historically Underutilized Business Zone", nextId: "hubzone" },
      { label: "Socially and Economically Disadvantaged", nextId: "8a" },
    ],
  },
}

const TREE_RESULTS: Record<string, Result> = {
  sam_gov: {
    id: "sam_gov",
    title: "SAM.gov Registration is Required",
    body: "To secure federal commercial contracts, you must establish an active SAM.gov profile. This is the foundational step for all commercial operators in the UAE seeking large-scale operational contracts.",
    actionLabel: "Read the SAM.gov Guide",
    actionUrl: "/guides/sam-gov-registration/",
  },
  cage_code: {
    id: "cage_code",
    title: "You need a CAGE Code",
    body: "Facility identification requires a Commercial and Government Entity (CAGE) code. This 5-character ID is critical for supply chain traceability.",
    actionLabel: "Read the CAGE Code Breakdown",
    actionUrl: "/guides/cage-code/",
  },
  sdvosb: {
    id: "sdvosb",
    title: "Pursue SDVOSB Certification",
    body: "Based on your veteran status, the SDVOSB certification offers significant strategic advantages for your commercial enterprise.",
    actionLabel: "Read the SDVOSB Guide",
    actionUrl: "/guides/sdvosb-certifi/",
  },
  hubzone: {
    id: "hubzone",
    title: "Pursue HUBZone Certification",
    body: "Operating in a designated HUBZone provides structured incentives. Strict geographical and employment metrics must be met.",
    actionLabel: "Read the HUBZone Guide",
    actionUrl: "/guides/hubzone-certification/",
  },
  "8a": {
    id: "8a",
    title: "Pursue 8(a) Certification",
    body: "The 8(a) program provides a specialized pathway for socially and economically disadvantaged commercial enterprises.",
    actionLabel: "Read the 8(a) Guide",
    actionUrl: "/guides/8a-certification/",
  },
}

export function DecisionTree({ className }: { className?: string }) {
  const [currentNodeId, setCurrentNodeId] = React.useState<string>("start")
  const [history, setHistory] = React.useState<string[]>([])

  const currentNode = TREE_NODES[currentNodeId]
  const currentResult = TREE_RESULTS[currentNodeId]

  const handleOptionClick = (nextId: string) => {
    setHistory([...history, currentNodeId])
    setCurrentNodeId(nextId)
  }

  const handleBack = () => {
    const newHistory = [...history]
    const prevId = newHistory.pop()
    if (prevId) {
      setHistory(newHistory)
      setCurrentNodeId(prevId)
    }
  }

  const handleReset = () => {
    setHistory([])
    setCurrentNodeId("start")
  }

  return (
    <div
      className={cn(
        "rounded-[0.375rem] border border-border bg-background p-8",
        className
      )}
    >
      <h2 className="mb-6 font-heading text-3xl">Determine Your Path</h2>

      {currentNode && (
        <div className="animate-in duration-300 fade-in slide-in-from-bottom-4">
          <p className="mb-8 text-xl font-medium text-foreground">
            {currentNode.question}
          </p>
          <div className="flex flex-col gap-4">
            {currentNode.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt.nextId)}
                className="w-full rounded-[0.375rem] border border-border px-6 py-4 text-left transition-colors hover:border-accent hover:bg-muted focus:ring-2 focus:ring-ring focus:outline-none"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {currentResult && (
        <div className="animate-in rounded-[0.375rem] border border-border bg-muted p-6 duration-300 fade-in slide-in-from-bottom-4">
          <h3 className="mb-4 font-heading text-3xl text-primary">
            {currentResult.title}
          </h3>
          <p className="mb-8 text-muted-foreground">{currentResult.body}</p>
          <Link
            href={currentResult.actionUrl}
            className="inline-flex items-center justify-center rounded-[0.375rem] bg-accent px-6 py-3 font-bold text-accent-foreground transition-colors hover:bg-accent/90 focus:ring-2 focus:ring-ring focus:outline-none"
          >
            {currentResult.actionLabel}
          </Link>
        </div>
      )}

      <div className="mt-8 flex gap-4">
        {history.length > 0 && (
          <button
            onClick={handleBack}
            className="text-sm font-bold text-muted-foreground hover:text-foreground focus:underline focus:outline-none"
          >
            ← Back
          </button>
        )}
        {currentNodeId !== "start" && (
          <button
            onClick={handleReset}
            className="text-sm font-bold text-muted-foreground hover:text-foreground focus:underline focus:outline-none"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
