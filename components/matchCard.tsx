"use client"

import { Clock, MapPin, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface Team {
  name: string
  code: string
  logo: string
  score?: string
}

interface Match {
  id: string
  matchNo: string
  matchDate: string
  matchTime: string
  matchVenue: string
  team1: Team
  team2: Team
  matchStatus: string
  matchLink: string
  isLive: boolean
  isCompleted?: boolean
}

interface MatchCardProps {
  match: Match
}

export default function MatchCard({ match }: MatchCardProps) {
  const isLive = match.isLive
  const isCompleted = match.isCompleted

  return (
    <Card
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md",
        isLive ? "border-2 border-red-500 shadow-md" : "",
        isCompleted ? "border border-slate-200 dark:border-slate-700" : "",
        !isLive && !isCompleted
          ? "border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
          : "",
      )}
    >
      <CardContent className="p-0">
        {/* Match header with match number and time */}
        <div className="bg-slate-100 dark:bg-slate-800 p-3 flex justify-between items-center">
          <div className="font-semibold">{match.matchNo}</div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-slate-500" />
            <span>{match.matchTime}</span>
          </div>
        </div>

        {/* Live indicator */}
        {isLive && (
          <div className="absolute top-0 right-0 z-10">
            <div className="bg-red-500 text-white px-3 py-1 flex items-center gap-1.5 rounded-bl-md font-semibold text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              LIVE
            </div>
          </div>
        )}

        {/* Teams section */}
        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-4">
            {/* Team 1 */}
            <div className="flex-1 flex items-center gap-4">
              <div className="w-16 h-16 relative flex-shrink-0 bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                <Image
                  src={match.team1.logo || "/placeholder.svg"}
                  alt={match.team1.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{match.team1.name}</h3>
                <div className="text-sm text-slate-500 dark:text-slate-400">{match.team1.code}</div>
                {match.team1.score && (
                  <div className="font-semibold mt-1 text-sm md:text-base">{match.team1.score}</div>
                )}
              </div>
            </div>

            {/* VS */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-sm">
                VS
              </div>
            </div>

            {/* Team 2 */}
            <div className="flex-1 flex items-center gap-4 md:justify-end">
              <div className="md:order-2 w-16 h-16 relative flex-shrink-0 bg-slate-100 dark:bg-slate-800 rounded-full p-2">
                <Image
                  src={match.team2.logo || "/placeholder.svg"}
                  alt={match.team2.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="md:text-right">
                <h3 className="font-bold text-lg">{match.team2.name}</h3>
                <div className="text-sm text-slate-500 dark:text-slate-400">{match.team2.code}</div>
                {match.team2.score && (
                  <div className="font-semibold mt-1 text-sm md:text-base">{match.team2.score}</div>
                )}
              </div>
            </div>
          </div>

          {/* Match status */}
          {match.matchStatus && (
            <div
              className={cn(
                "p-3 rounded-lg text-center my-4",
                isLive
                  ? "bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50"
                  : isCompleted
                    ? "bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                    : "",
              )}
            >
              <p
                className={cn(
                  "font-medium text-sm md:text-base",
                  isLive ? "text-red-700 dark:text-red-400" : isCompleted ? "text-slate-700 dark:text-slate-300" : "",
                )}
              >
                {match.matchStatus}
              </p>
            </div>
          )}

          {/* Match venue and link */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <MapPin className="h-4 w-4" />
              <span>{match.matchVenue}</span>
            </div>

            <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
              <a href={match.matchLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <span>View Match</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
