import type { Match, PointsTableEntry, Team } from "./types"

// Team data
const teams: Team[] = [
  {
    id: "csk",
    name: "Chennai Super Kings",
    shortName: "CSK",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "MS Dhoni",
    titles: 5,
    winRate: 59.8,
    keyPlayers: ["MS Dhoni", "Ravindra Jadeja", "Ruturaj Gaikwad", "Deepak Chahar"],
  },
  {
    id: "mi",
    name: "Mumbai Indians",
    shortName: "MI",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Hardik Pandya",
    titles: 5,
    winRate: 57.2,
    keyPlayers: ["Rohit Sharma", "Jasprit Bumrah", "Suryakumar Yadav", "Ishan Kishan"],
  },
  {
    id: "rcb",
    name: "Royal Challengers Bangalore",
    shortName: "RCB",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Faf du Plessis",
    titles: 0,
    winRate: 48.6,
    keyPlayers: ["Virat Kohli", "Glenn Maxwell", "Mohammed Siraj", "Faf du Plessis"],
  },
  {
    id: "kkr",
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Shreyas Iyer",
    titles: 2,
    winRate: 51.3,
    keyPlayers: ["Andre Russell", "Sunil Narine", "Venkatesh Iyer", "Varun Chakravarthy"],
  },
  {
    id: "dc",
    name: "Delhi Capitals",
    shortName: "DC",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Rishabh Pant",
    titles: 0,
    winRate: 45.7,
    keyPlayers: ["Rishabh Pant", "Axar Patel", "Kuldeep Yadav", "Prithvi Shaw"],
  },
  {
    id: "srh",
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Pat Cummins",
    titles: 1,
    winRate: 50.2,
    keyPlayers: ["Heinrich Klaasen", "Bhuvneshwar Kumar", "Aiden Markram", "Umran Malik"],
  },
  {
    id: "rr",
    name: "Rajasthan Royals",
    shortName: "RR",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Sanju Samson",
    titles: 1,
    winRate: 49.1,
    keyPlayers: ["Jos Buttler", "Sanju Samson", "Yuzvendra Chahal", "Shimron Hetmyer"],
  },
  {
    id: "pbks",
    name: "Punjab Kings",
    shortName: "PBKS",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Shikhar Dhawan",
    titles: 0,
    winRate: 46.8,
    keyPlayers: ["Shikhar Dhawan", "Liam Livingstone", "Arshdeep Singh", "Kagiso Rabada"],
  },
  {
    id: "gt",
    name: "Gujarat Titans",
    shortName: "GT",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "Shubman Gill",
    titles: 1,
    winRate: 65.2,
    keyPlayers: ["Shubman Gill", "Rashid Khan", "Mohammed Shami", "Rahul Tewatia"],
  },
  {
    id: "lsg",
    name: "Lucknow Super Giants",
    shortName: "LSG",
    logo: "/placeholder.svg?height=100&width=100",
    captain: "KL Rahul",
    titles: 0,
    winRate: 58.3,
    keyPlayers: ["KL Rahul", "Nicholas Pooran", "Avesh Khan", "Marcus Stoinis"],
  },
]

// Match data
const matches: Match[] = [
  {
    id: "match1",
    name: "Match 1",
    team1: teams[0], // CSK
    team2: teams[1], // MI
    date: "2025-04-15T00:00:00Z",
    time: "19:30",
    venue: "MA Chidambaram Stadium, Chennai",
    status: "LIVE",
    score: {
      team1: {
        runs: 156,
        wickets: 6,
        overs: 16.4,
      },
      team2: {
        runs: 142,
        wickets: 8,
        overs: 16.0,
      },
    },
  },
  {
    id: "match2",
    name: "Match 2",
    team1: teams[2], // RCB
    team2: teams[3], // KKR
    date: "2025-04-16T00:00:00Z",
    time: "15:30",
    venue: "M. Chinnaswamy Stadium, Bangalore",
    status: "UPCOMING",
  },
  {
    id: "match3",
    name: "Match 3",
    team1: teams[4], // DC
    team2: teams[5], // SRH
    date: "2025-04-16T00:00:00Z",
    time: "19:30",
    venue: "Arun Jaitley Stadium, Delhi",
    status: "UPCOMING",
  },
  {
    id: "match4",
    name: "Match 4",
    team1: teams[6], // RR
    team2: teams[7], // PBKS
    date: "2025-04-17T00:00:00Z",
    time: "19:30",
    venue: "Sawai Mansingh Stadium, Jaipur",
    status: "UPCOMING",
  },
  {
    id: "match5",
    name: "Match 5",
    team1: teams[8], // GT
    team2: teams[9], // LSG
    date: "2025-04-18T00:00:00Z",
    time: "19:30",
    venue: "Narendra Modi Stadium, Ahmedabad",
    status: "UPCOMING",
  },
  {
    id: "match6",
    name: "Match 6",
    team1: teams[1], // MI
    team2: teams[2], // RCB
    date: "2025-04-19T00:00:00Z",
    time: "15:30",
    venue: "Wankhede Stadium, Mumbai",
    status: "UPCOMING",
  },
  {
    id: "match7",
    name: "Match 7",
    team1: teams[0], // CSK
    team2: teams[3], // KKR
    date: "2025-04-19T00:00:00Z",
    time: "19:30",
    venue: "MA Chidambaram Stadium, Chennai",
    status: "UPCOMING",
  },
  {
    id: "match8",
    name: "Match 8",
    team1: teams[4], // DC
    team2: teams[6], // RR
    date: "2025-04-20T00:00:00Z",
    time: "15:30",
    venue: "Arun Jaitley Stadium, Delhi",
    status: "UPCOMING",
  },
  {
    id: "match9",
    name: "Match 9",
    team1: teams[5], // SRH
    team2: teams[7], // PBKS
    date: "2025-04-20T00:00:00Z",
    time: "19:30",
    venue: "Rajiv Gandhi International Stadium, Hyderabad",
    status: "UPCOMING",
  },
  {
    id: "match10",
    name: "Match 10",
    team1: teams[8], // GT
    team2: teams[0], // CSK
    date: "2025-04-21T00:00:00Z",
    time: "19:30",
    venue: "Narendra Modi Stadium, Ahmedabad",
    status: "UPCOMING",
  },
]

// Points table data
const pointsTable: PointsTableEntry[] = [
  {
    team: teams[8], // GT
    played: 8,
    won: 7,
    lost: 1,
    noResult: 0,
    points: 14,
    netRunRate: 1.25,
  },
  {
    team: teams[0], // CSK
    played: 8,
    won: 6,
    lost: 2,
    noResult: 0,
    points: 12,
    netRunRate: 0.95,
  },
  {
    team: teams[9], // LSG
    played: 8,
    won: 5,
    lost: 3,
    noResult: 0,
    points: 10,
    netRunRate: 0.65,
  },
  {
    team: teams[6], // RR
    played: 8,
    won: 5,
    lost: 3,
    noResult: 0,
    points: 10,
    netRunRate: 0.45,
  },
  {
    team: teams[1], // MI
    played: 8,
    won: 4,
    lost: 4,
    noResult: 0,
    points: 8,
    netRunRate: 0.15,
  },
  {
    team: teams[3], // KKR
    played: 8,
    won: 4,
    lost: 4,
    noResult: 0,
    points: 8,
    netRunRate: -0.05,
  },
  {
    team: teams[5], // SRH
    played: 8,
    won: 3,
    lost: 5,
    noResult: 0,
    points: 6,
    netRunRate: -0.25,
  },
  {
    team: teams[2], // RCB
    played: 8,
    won: 3,
    lost: 5,
    noResult: 0,
    points: 6,
    netRunRate: -0.45,
  },
  {
    team: teams[7], // PBKS
    played: 8,
    won: 2,
    lost: 6,
    noResult: 0,
    points: 4,
    netRunRate: -0.75,
  },
  {
    team: teams[4], // DC
    played: 8,
    won: 1,
    lost: 7,
    noResult: 0,
    points: 2,
    netRunRate: -1.05,
  },
]

// Export functions to get data
export function getTeams(): Team[] {
  return teams
}

export function getMatches(): Match[] {
  return matches
}

export function getPointsTable(): PointsTableEntry[] {
  return pointsTable
}
