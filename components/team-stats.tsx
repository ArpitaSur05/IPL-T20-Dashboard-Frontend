import type { Team } from "@/lib/types"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { Trophy, Users, TrendingUp } from "lucide-react"

interface TeamStatsProps {
  teams: Team[]
}

export default function TeamStats({ teams }: TeamStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teams.map((team) => (
        <Card key={team.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <CardHeader className="p-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-full p-1">
                <Image src={team.logo || "/placeholder.svg"} alt={team.name} fill className="object-contain" />
              </div>
              <div>
                <h3 className="font-bold">{team.name}</h3>
                <p className="text-sm opacity-90">{team.shortName}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Titles: {team.titles}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Captain: {team.captain}</span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm">Win Rate: {team.winRate}%</span>
              </div>

              <div className="mt-3 pt-3 border-t">
                <h4 className="text-sm font-semibold mb-2">Key Players:</h4>
                <div className="flex flex-wrap gap-1">
                  {team.keyPlayers.map((player) => (
                    <span key={player} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {player}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
