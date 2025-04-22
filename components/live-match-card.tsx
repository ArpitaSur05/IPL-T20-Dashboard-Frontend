"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Trophy } from "lucide-react"

// Interfaces
interface Team {
  name: string
  logo: string
  score: string
  overs: string
}

interface LiveMatch {
  matchNumber: string
  team1: Team
  team2: Team
  matchSummary: string
  liveMatch: string
}

interface MiniScoreCardData {
  striker: {
    name: string
    runs: string
    balls: string
  }
  nonStriker: {
    name: string
    runs: string
    balls: string
  }
  bowler: {
    name: string
    overs: string
    runs: string
    wickets: string
  }
}

interface LiveMatchCardProps {
  liveMatchData: LiveMatch
  miniScoreCardData?: MiniScoreCardData
}

const LiveMatchCard = ({ liveMatchData, miniScoreCardData }: LiveMatchCardProps) => {
  const { matchNumber, team1, team2, matchSummary, liveMatch } = liveMatchData
  const [timeNow, setTimeNow] = useState<string>("")

  useEffect(() => {
    if (liveMatch === "False") {
      const updateTime = () => {
        const now = new Date()
        setTimeNow(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
      }

      updateTime()
      const interval = setInterval(updateTime, 60000)
      return () => clearInterval(interval)
    }
  }, [liveMatch])

  return (
    <Card className="overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 p-3 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <h3 className="text-sm font-medium">{matchNumber}</h3>
          </div>
          {liveMatch === "False" && (
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-300 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
              <Badge variant="outline" className="border-red-300 bg-red-500/20 text-white">
                LIVE
              </Badge>
              {timeNow && (
                <div className="flex items-center gap-1 text-xs">
                  <Clock className="h-3 w-3" />
                  <span>{timeNow}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <CardContent className="p-0">
        {/* Teams */}
        <div className="bg-gradient-to-b from-white to-gray-50 p-4">
          <div className="flex items-center justify-between">
            {/* Team 1 */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 hover:scale-105">
                <img src={team1.logo || "/placeholder.svg"} alt={team1.name} className="h-full w-full object-cover" />
              </div>
              <h4 className="text-base font-bold text-gray-800">{team1.name}</h4>
              <p className="text-lg font-semibold text-red-700">{team1.score}</p>
              <p className="text-xs text-gray-500">{team1.overs}</p>
            </div>

            {/* VS Divider */}
            <div className="mx-2 flex flex-col items-center">
              <div className="relative my-2 h-10 w-px bg-gray-300">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 p-2 text-xs font-bold text-white">
                  V/S
                </div>
              </div>
              <div className="h-px w-16 bg-gray-200"></div>
            </div>

            {/* Team 2 */}
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="mb-2 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md transition-transform duration-300 hover:scale-105">
                <img src={team2.logo || "/placeholder.svg"} alt={team2.name} className="h-full w-full object-cover" />
              </div>
              <h4 className="text-base font-bold text-gray-800">{team2.name}</h4>
              <p className="text-lg font-semibold text-red-700">{team2.score}</p>
              <p className="text-xs text-gray-500">{team2.overs}</p>
            </div>
          </div>
        </div>

        {/* Match Summary */}
        {matchSummary && (
          <div className="border-t border-gray-100 bg-white p-3">
            <p className="text-sm font-medium text-gray-700">{matchSummary}</p>
          </div>
        )}

        {/* Mini Scorecard */}
        {miniScoreCardData && (
          <div className="border-t border-gray-100 bg-white px-4 py-3">
            <h4 className="mb-2 text-sm font-semibold text-gray-700">Mini Scorecard</h4>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm text-gray-800">
                <thead className="bg-gray-100 text-left text-xs uppercase tracking-wide text-gray-600">
                  <tr>
                    <th className="px-4 py-2">Player</th>
                    <th className="px-4 py-2">Runs</th>
                    <th className="px-4 py-2">Balls</th>
                    <th className="px-4 py-2">Overs</th>
                    <th className="px-4 py-2">Wickets</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr className="font-medium">
                    <td className="px-4 py-2">{miniScoreCardData.striker.name} <span className="text-xs text-green-600">(Striker)</span></td>
                    <td className="px-4 py-2">{miniScoreCardData.striker.runs}</td>
                    <td className="px-4 py-2">{miniScoreCardData.striker.balls}</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">-</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">{miniScoreCardData.nonStriker.name} <span className="text-xs text-blue-600">(Non-Striker)</span></td>
                    <td className="px-4 py-2">{miniScoreCardData.nonStriker.runs}</td>
                    <td className="px-4 py-2">{miniScoreCardData.nonStriker.balls}</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">-</td>
                  </tr>
                  <tr className="text-red-700 font-medium">
                    <td className="px-4 py-2">{miniScoreCardData.bowler.name} <span className="text-xs text-red-500">(Bowler)</span></td>
                    <td className="px-4 py-2">{miniScoreCardData.bowler.runs}</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2">{miniScoreCardData.bowler.overs}</td>
                    <td className="px-4 py-2">{miniScoreCardData.bowler.wickets}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default LiveMatchCard
