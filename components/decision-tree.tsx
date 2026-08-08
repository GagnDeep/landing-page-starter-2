"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const QUESTIONS = [
  {
    id: "budget",
    question: "What is your budget?",
    options: [
      { value: "under-1000", label: "Under $1,000", next: "budget-warning" },
      { value: "1000-2000", label: "$1,000 - $2,000", next: "play-style" },
      { value: "over-2000", label: "Over $2,000", next: "play-style" },
    ],
  },
  {
    id: "budget-warning",
    question: "Budget Reality Check",
    description:
      "Instruments under $1,000 are typically mass-produced and may lack tuning stability and true resonance. Are you willing to save a bit more for a crafted instrument?",
    options: [
      { value: "yes-save", label: "Yes, I'll save up", next: "play-style" },
      {
        value: "no-budget",
        label: "No, this is my firm limit",
        next: "result-budget",
      },
    ],
  },
  {
    id: "play-style",
    question: "How do you intend to play?",
    options: [
      {
        value: "fast",
        label: "Fast, percussive, rhythmic grooves",
        next: "result-nitrided",
      },
      {
        value: "slow",
        label: "Slow, melodic, atmospheric soundscapes",
        next: "result-stainless",
      },
      { value: "mixed", label: "A mix of both", next: "result-ember" },
    ],
  },
]

const RESULTS = {
  "result-budget": {
    title: "Consider the Secondhand Market",
    description:
      "With a firm budget under $1,000, we strongly advise against buying a new, unverified brand. Look for used instruments from reputable makers on community forums.",
  },
  "result-nitrided": {
    title: "Nitrided Steel is Your Match",
    description:
      "For fast, percussive playing, nitrided steel offers a punchy, ceramic attack with a shorter sustain that prevents notes from muddying together.",
  },
  "result-stainless": {
    title: "Stainless Steel is Your Match",
    description:
      "For slow, atmospheric playing, stainless steel offers a long, ethereal sustain and a bright, resonant bloom.",
  },
  "result-ember": {
    title: "Ember Steel is Your Match",
    description:
      "For a balanced approach, Ember steel (or similar proprietary blends) offers some of the punch of nitrided steel with much of the warmth and sustain of stainless.",
  },
}

export function DecisionTree() {
  const [currentStepId, setCurrentStepId] = React.useState("budget")
  const [selectedValue, setSelectedValue] = React.useState("")
  const [history, setHistory] = React.useState<string[]>([])
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // delay setting mount flag to bypass strict concurrent mode sync rendering effects
    const tid = setTimeout(() => setMounted(true), 0)
    return () => clearTimeout(tid)
  }, [])

  if (!mounted) {
    return (
      <Card className="mx-auto w-full max-w-2xl border-border bg-card">
        <CardHeader>
          <CardTitle className="font-heading text-2xl">
            Find Your Handpan Match
          </CardTitle>
          <CardDescription>
            Answer a few questions to determine the right material and approach
            for your first instrument.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <h3 className="font-medium">1. Consider Your Budget</h3>
            <p className="text-sm text-muted-foreground">
              Quality instruments typically start around $1,500.
            </p>
            <h3 className="font-medium">2. Consider Your Play Style</h3>
            <p className="text-sm text-muted-foreground">
              Fast players often prefer Nitrided steel; slow, melodic players
              often prefer Stainless.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentQuestion = QUESTIONS.find((q) => q.id === currentStepId)
  const currentResult = RESULTS[currentStepId as keyof typeof RESULTS]

  const handleNext = () => {
    if (!selectedValue || !currentQuestion) return
    const option = currentQuestion.options.find(
      (o) => o.value === selectedValue
    )
    if (option && option.next) {
      setHistory((prev) => [...prev, currentStepId])
      setCurrentStepId(option.next)
      setSelectedValue("")
    }
  }

  const handleBack = () => {
    if (history.length === 0) return
    const prev = history[history.length - 1]
    setHistory(history.slice(0, -1))
    setCurrentStepId(prev)
    setSelectedValue("")
  }

  const handleRestart = () => {
    setCurrentStepId("budget")
    setSelectedValue("")
    setHistory([])
  }

  return (
    <Card className="mx-auto w-full max-w-2xl border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">
          {currentResult ? currentResult.title : currentQuestion?.question}
        </CardTitle>
        {(currentResult?.description || currentQuestion?.description) && (
          <CardDescription className="mt-2 text-base text-foreground">
            {currentResult
              ? currentResult.description
              : currentQuestion?.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        {currentQuestion && (
          <div className="space-y-6">
            <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
              {currentQuestion.options.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center space-x-3 rounded-lg border border-border/50 p-4 transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:bg-muted/50"
                >
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer text-base"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={history.length === 0}
                className="w-24 border-primary/20 transition-colors hover:bg-primary/5 hover:text-primary"
              >
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedValue}
                className="w-24 bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {currentResult && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleRestart}
              className="bg-primary px-8 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Over
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
