import type { Team } from "./types"
import { getTeams } from "./data"

// Map of team abbreviations to team IDs
const TEAM_ABBREVIATION_MAP: Record<string, string> = {
  MI: "mi",
  CSK: "csk",
  RCB: "rcb",
  KKR: "kkr",
  DC: "dc",
  SRH: "srh",
  RR: "rr",
  PBKS: "pbks",
  GT: "gt",
  LSG: "lsg",
}

/**
 * Get a team object by its abbreviation
 */
export function getTeamByAbbreviation(abbreviation: string): Team {
  const teams = getTeams()
  const teamId = TEAM_ABBREVIATION_MAP[abbreviation] || abbreviation.toLowerCase()
  const team = teams.find((team) => team.id === teamId || team.shortName === abbreviation)

  // If team not found, return a placeholder team
  if (!team) {
    return {
      id: abbreviation.toLowerCase(),
      name: abbreviation,
      shortName: abbreviation,
      logo: "/placeholder.svg?height=100&width=100",
      captain: "Unknown",
      titles: 0,
      winRate: 0,
      keyPlayers: [],
    }
  }

  return team
}

/**
 * Transform points table data from the backend format to the frontend format
 */
export function transformPointsTableData(data: any) {
  if (!data || !data.headerRow || !data.rows) {
    return []
  }

  // Find indices for each column
  const posIndex = data.headerRow.indexOf("POS")
  const teamIndex = data.headerRow.indexOf("TEAM")
  const playedIndex = data.headerRow.indexOf("P")
  const wonIndex = data.headerRow.indexOf("W")
  const lostIndex = data.headerRow.indexOf("L")
  const nrIndex = data.headerRow.indexOf("NR")
  const nrrIndex = data.headerRow.indexOf("NRR")
  const ptsIndex = data.headerRow.indexOf("PTS")
  const formIndex = data.headerRow.indexOf("FORM")

  // Transform each row into a structured object
  return data.rows.map((row: string[]) => {
    const teamAbbr = row[teamIndex]
    const team = getTeamByAbbreviation(teamAbbr)

    return {
      position: Number.parseInt(row[posIndex], 10),
      team,
      played: Number.parseInt(row[playedIndex], 10),
      won: Number.parseInt(row[wonIndex], 10),
      lost: Number.parseInt(row[lostIndex], 10),
      noResult: Number.parseInt(row[nrIndex], 10),
      netRunRate: Number.parseFloat(row[nrrIndex]),
      points: Number.parseInt(row[ptsIndex], 10),
      form: row[formIndex] || "",
    }
  })
}
