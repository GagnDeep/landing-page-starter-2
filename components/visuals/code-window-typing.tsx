"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CodeWindowTypingProps extends React.HTMLAttributes<HTMLDivElement> {
  lines: string[]
  typingSpeed?: number
  lineDelay?: number
}

// Adapted to represent logistical planning/itineraries rather than software code.
export function CodeWindowTyping({
  className,
  lines,
  typingSpeed = 50,
  lineDelay = 1000,
  ...props
}: CodeWindowTypingProps) {
  const [displayedLines, setDisplayedLines] = React.useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0)
  const [currentCharIndex, setCurrentCharIndex] = React.useState(0)

  React.useEffect(() => {
    if (currentLineIndex >= lines.length) return

    const currentLine = lines[currentLineIndex]

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        queueMicrotask(() => {
          setDisplayedLines((prev) => {
            const newLines = [...prev]
            if (newLines[currentLineIndex] === undefined) {
              newLines[currentLineIndex] = ""
            }
            newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1)
            return newLines
          })
          setCurrentCharIndex((prev) => prev + 1)
        })
      }, typingSpeed)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        queueMicrotask(() => {
          setCurrentLineIndex((prev) => prev + 1)
          setCurrentCharIndex(0)
        })
      }, lineDelay)
      return () => clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex, lines, typingSpeed, lineDelay])

  return (
    <div
      className={cn(
        "rounded-md border border-border bg-card/50 backdrop-blur-sm p-4 font-mono text-sm text-muted-foreground shadow-sm",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/50">
        <div className="w-2 h-2 rounded-full bg-destructive/50" />
        <div className="w-2 h-2 rounded-full bg-secondary/50" />
        <div className="w-2 h-2 rounded-full bg-primary/50" />
        <span className="ml-2 text-xs uppercase tracking-widest opacity-50">Logistics_Terminal.exe</span>
      </div>
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index} className="flex">
            <span className="mr-4 opacity-30 select-none">{String(index + 1).padStart(2, '0')}</span>
            <span className="text-foreground">{line}</span>
          </div>
        ))}
        {currentLineIndex < lines.length && (
          <div className="flex">
            <span className="mr-4 opacity-30 select-none">{String(displayedLines.length + 1).padStart(2, '0')}</span>
            <span className="motion-safe:animate-[pulse_1s_ease-in-out_infinite] w-2 h-4 bg-primary inline-block align-middle ml-1" />
          </div>
        )}
      </div>
    </div>
  )
}
