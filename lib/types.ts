export interface Team {
  id: string
  name: string
  shortName: string
  logo: string
  captain: string
  titles: number
  winRate: number
  keyPlayers: string[]
}

export interface MatchScore {
  team1: {
    runs: number
    wickets: number
    overs: number
  }
  team2: {
    runs: number
    wickets: number
    overs: number
  }
}

export interface Match {
  id: string
  name: string
  team1: Team
  team2: Team
  date: string
  time: string
  venue: string
  status: "UPCOMING" | "LIVE" | "COMPLETED"
  score?: MatchScore
  result?: string
}

export interface PointsTableEntry {
  team: Team
  played: number
  won: number
  lost: number
  noResult: number
  points: number
  netRunRate: number
}
