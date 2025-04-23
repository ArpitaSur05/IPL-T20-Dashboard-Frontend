import LiveMatchCard from "@/components/live-match-card"
import PointsTable from "@/components/points-table"
import ScheduleList from "@/components/schedule-list"
import ScoreCard from "@/components/ui/score-card"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getMatches, getTeams } from "@/lib/data"

async function getMatchesData() {
  try {
    const response = await fetch("http://localhost:3000/match-schedule")
    if (!response.ok) {
      console.error("Failed to fetch match schedule:", response.status)
      return []
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching match schedule:", error)
    return []
  }
}

async function getPointsTableData() {
  try {
    const response = await fetch("http://localhost:3000/points-table")
    if (!response.ok) {
      console.error("Failed to fetch points table:", response.status)
      return []
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching points table:", error)
    return []
  }
}

async function getLiveMatchCard(matchLink: string) {
  try {
    const response = await fetch(`http://localhost:3000/live-match?matchLink=${encodeURIComponent(matchLink)}`)
    if (!response.ok) {
      console.error("Failed to fetch live match data:", response.status)
      return null
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching live match data:", error)
    return null
  }
}

async function getScoreCard(matchLink: string) {
  try {
    const response = await fetch(`http://localhost:3000/score-card?matchLink=${encodeURIComponent(matchLink)}`)
    if (!response.ok) {
      console.error("Failed to fetch score card data:", response.status)
      return null
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching score card data:", error)
    return null
  }
}

export default async function Home() {
  const matches = await getMatchesData()
  const pointsTableData = await getPointsTableData()


  const teams = getTeams()

  // 🔍 Step 1: Find the first match where matchStatus is not empty
  const activeMatch = matches.find((match: any) => match.matchStatus && match.matchStatus.trim() !== "")
  const matchLink = activeMatch?.matchLink

  // 🎯 Step 2: Use that link to fetch live data
  const liveMatchData = matchLink ? await getLiveMatchCard(matchLink) : null
  const scoreCardData = matchLink ? await getScoreCard(matchLink) : null
  console.log("scorecard data", scoreCardData);

  return (
    <main className="container mx-auto px-4 py-6 max-w-7xl">
      {/* <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
        IPL T20 Dashboard
      </h1> */}

      {/* 🌐 Live Match Section */}
      {liveMatchData && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-red-600">🔴 Live Match</h2>
          <LiveMatchCard liveMatchData={liveMatchData} />
        </section>
      )}
      {scoreCardData && (
  <section className="mb-10">
    <h2 className="text-xl font-semibold mb-4 text-blue-600">📊 Score Card</h2>
    <ScoreCard scoreData={scoreCardData}/>
  </section>
)}

      {/* 🧭 Tabs Section */}
      <Tabs defaultValue="schedule" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="schedule">Match Schedule</TabsTrigger>
          <TabsTrigger value="points">Points Table</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="mt-4">
          <ScheduleList matches={matches} />
        </TabsContent>

        <TabsContent value="points" className="mt-4">
          <PointsTable initialData={pointsTableData} />
        </TabsContent>
      </Tabs>
    </main>
  )
}
