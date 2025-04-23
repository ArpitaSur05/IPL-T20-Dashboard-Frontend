"use client"

import { Card, CardContent } from "@/components/ui/card"

interface BatterRow {
  name: string
  runs: number
  balls: number
  fours: number
  sixes: number
}

interface BowlerRow {
  name: string
  overs: number
  runs: number
  wickets: number
  maidens: number
  economy: number
}

interface ScoreCardData {
  batting: {
    headers: string[]
    rows: BatterRow[]
  }
  bowling: {
    headers: string[]
    rows: BowlerRow[]
  }
}

interface ScoreCardProps {
  scoreData: ScoreCardData
}

const ScoreCard = ({ scoreData }: ScoreCardProps) => {
  const { batting, bowling } = scoreData

  return (
    <Card className="my-6 shadow-lg">
      <CardContent className="p-4 space-y-6">
        {/* Batting Scorecard */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-800">Batting</h3>
          <div className="overflow-x-auto border rounded-lg border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100 text-left text-xs uppercase tracking-wide text-gray-600">
                <tr>
                  <th className="px-4 py-2">Batter</th>
                  <th className="px-4 py-2">Runs</th>
                  <th className="px-4 py-2">Balls</th>
                  <th className="px-4 py-2">4s</th>
                  <th className="px-4 py-2">6s</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {batting.rows.map((player, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 font-medium">{player.name}</td>
                    <td className="px-4 py-2">{player.runs}</td>
                    <td className="px-4 py-2">{player.balls}</td>
                    <td className="px-4 py-2">{player.fours}</td>
                    <td className="px-4 py-2">{player.sixes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bowling Scorecard */}
        <div>
          <h3 className="mb-2 text-lg font-semibold text-gray-800">Bowling</h3>
          <div className="overflow-x-auto border rounded-lg border-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100 text-left text-xs uppercase tracking-wide text-gray-600">
                <tr>
                  <th className="px-4 py-2">Bowler</th>
                  <th className="px-4 py-2">Overs</th>
                  <th className="px-4 py-2">Runs</th>
                  <th className="px-4 py-2">Wickets</th>
                  <th className="px-4 py-2">Maidens</th>
                  <th className="px-4 py-2">Economy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {bowling.rows.map((bowler, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 font-medium">{bowler.name}</td>
                    <td className="px-4 py-2">{bowler.overs}</td>
                    <td className="px-4 py-2">{bowler.runs}</td>
                    <td className="px-4 py-2">{bowler.wickets}</td>
                    <td className="px-4 py-2">{bowler.maidens}</td>
                    <td className="px-4 py-2">{bowler.economy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ScoreCard
