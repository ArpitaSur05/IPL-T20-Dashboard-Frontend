"use client"

import { useEffect, useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { getTeamByAbbreviation } from "@/lib/team-mapping"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface PointsTableProps {
  initialData?: any
}

export default function PointsTable({ initialData }: PointsTableProps) {
  const [data, setData] = useState<any>(initialData)
  const [loading, setLoading] = useState(!initialData)
  const [error, setError] = useState<string | null>(null)



   

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>
  }

  if (!data || !data.headerRow || !data.rows) {
    return <div className="p-4 text-center">No data available</div>
  }

  // Find indices for each column
  const posIndex = data.headerRow.indexOf("POS")
  const teamIndex = data.headerRow.indexOf("TEAM")
  const playedIndex = data.headerRow.indexOf("P")
  const wonIndex = data.headerRow.indexOf("W")
  const lostIndex = data.headerRow.indexOf("L")
  const nrIndex = data.headerRow.indexOf("NR")
  const forIndex = data.headerRow.indexOf("FOR")
  const nrrIndex = data.headerRow.indexOf("NRR")
  const ptsIndex = data.headerRow.indexOf("PTS")
  const formIndex = data.headerRow.indexOf("RECENT FORM")
  
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">P</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">L</TableHead>
            <TableHead className="text-center">NR</TableHead>
            <TableHead className="text-center">FOR</TableHead>
            <TableHead className="text-center">NRR</TableHead>
            <TableHead className="text-center">Pts</TableHead>
            <TableHead className="text-center  md:table-cell">Form</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row: string[], index: number) => {
            const teamAbbr = row[teamIndex]
            const team = getTeamByAbbreviation(teamAbbr)
            const formString = row[formIndex] || ""
            console.log("Form String ==>", row[10])
            return (
              <TableRow key={index} className={index < 4 ? "bg-blue-50" : ""}>
                <TableCell className="text-center font-medium">{row[posIndex]}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image src={team.logo || "/placeholder.svg"} alt={team.name} fill className="object-contain" />
                    </div>
                    <span className="hidden md:inline">{team.name}</span>
                    <span className="md:hidden">{teamAbbr}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{row[playedIndex]}</TableCell>
                <TableCell className="text-center">{row[wonIndex]}</TableCell>
                <TableCell className="text-center">{row[lostIndex]}</TableCell>
                <TableCell className="text-center">{row[nrIndex]}</TableCell>
                <TableCell className="text-center">{row[forIndex]}</TableCell>
                <TableCell className="text-center">{row[nrrIndex]}</TableCell>
                <TableCell className="text-center font-bold">{row[ptsIndex]}</TableCell>
                <TableCell className="text-center md:table-cell">
                  <div className="flex gap-1 justify-center">
                    {formString.split("").map((result, i) => (
                      <Badge
                        key={i}
                        variant={result === "W" ? "success" : "destructive"}
                        className={`w-6 h-6 flex items-center justify-center p-0 ${
                          result === "W" ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {result}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

function PointsTableSkeleton() {
  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="w-12 text-center">#</TableHead>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">P</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">L</TableHead>
            <TableHead className="text-center">NR</TableHead>
            <TableHead className="text-center">NRR</TableHead>
            <TableHead className="text-center">Pts</TableHead>
            <TableHead className="text-center hidden md:table-cell">Form</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell className="text-center">
                <Skeleton className="h-4 w-4 mx-auto" />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-4 w-4 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-4 w-4 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-4 w-4 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-4 w-4 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-4 w-12 mx-auto" />
              </TableCell>
              <TableCell className="text-center">
                <Skeleton className="h-4 w-8 mx-auto" />
              </TableCell>
              <TableCell className="text-center hidden md:table-cell">
                <div className="flex gap-1 justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-6 w-6 rounded-full" />
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
