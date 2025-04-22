import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, LinkIcon } from "lucide-react"
import { format, parse } from "date-fns"
import { cn } from "@/lib/utils"

interface Match {
  matchNo: string
  matchDate: string
  matchTime: string
  matchVenue: string
  team1: string
  team2: string
  matchStatus: string
  matchLink: string
  team1Logo?: string
  team2Logo?: string
}

interface ScheduleListProps {
  matches: Match[]
}

export default function ScheduleList({ matches }: ScheduleListProps) {
  const parseDate = (date: string) => {
    const formattedDate = `${date}, 2025`
    return parse(formattedDate, "MMM, EEE dd, yyyy", new Date())
  }

  const sortedMatches = matches.sort((a, b) => {
    const dateA = parseDate(a.matchDate)
    const dateB = parseDate(b.matchDate)
    return dateA.getTime() - dateB.getTime()
  })

  const matchesByDate = sortedMatches.reduce((acc, match) => {
    const dateKey = match.matchDate
    if (!acc[dateKey]) acc[dateKey] = []
    acc[dateKey].push(match)
    return acc
  }, {} as Record<string, Match[]>)

  const sortedDates = Object.keys(matchesByDate).sort((a, b) => {
    const dateA = parseDate(a)
    const dateB = parseDate(b)
    return dateA.getTime() - dateB.getTime()
  })

  return (
    <div className="space-y-6">
      {sortedDates.map((date) => (
        <div key={date} className="space-y-3">
          <h3 className="font-semibold flex items-center gap-2">
            <CalendarDays className="h-4 w-4" />
            {format(parseDate(date), "PPP")}
          </h3>

          <div className="space-y-3">
            {matchesByDate[date].map((match, index) => {
              const isLive = !!match.matchStatus

              return (
                <Card
                  key={`${match.matchNo}-${index}`}
                  className={cn(
                    "overflow-hidden hover:shadow-md transition-shadow relative",
                    isLive && "border-2 border-red-500"
                  )}
                >
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
                  <CardContent className="p-4">
                    <div className="grid grid-cols-[2fr_2fr_1fr] items-center">
                      {/* Match Number and Teams */}
                      <div className="flex flex-col gap-1">
                        <h4 className="text-lg font-semibold">{match.matchNo || "TBD"}</h4>
                        <div className="flex items-center gap-2">
                          {match.team1Logo && (
                            <img src={match.team1Logo} alt={match.team1} className="h-6 w-6 object-contain" />
                          )}
                          <span>{match.team1}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {match.team2Logo && (
                            <img src={match.team2Logo} alt={match.team2} className="h-6 w-6 object-contain" />
                          )}
                          <span>{match.team2}</span>
                        </div>
                      </div>

                      {/* Match Info */}
                      <div className="flex flex-col gap-1 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{match.matchTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{match.matchVenue}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <LinkIcon className="h-4 w-4" />
                          <a
                            href={match.matchLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View Match
                          </a>
                        </div>
                      </div>

                      {/* Status */}
                      <div className="flex items-center justify-center">
                        {match.matchStatus ? (
                          <div className="text-xs text-blue-800 font-bold px-3 py-1.5 leading-tight">
                            {match.matchStatus}
                          </div>
                        ) : (
                          <Badge variant="secondary" className="w-fit">
                            Upcoming
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
