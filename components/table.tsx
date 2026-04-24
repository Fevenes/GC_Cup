'use client'

interface Team {
  name: string
  played: number
  wins: number
  draws: number
  losses: number
  gf: number
  ga: number
  gd: number
  points: number
}

const teams: Team[] = [
  { name: 'Anointed FC', played: 1, wins: 0, draws: 0, losses: 1, gf: 0, ga: 5, gd: -5, points: 0 },
  { name: 'Believers FC', played: 1, wins: 1, draws: 0, losses: 0, gf: 5, ga: 0, gd: 5, points: 3 },
  { name: 'Fares FC', played: 1, wins: 0, draws: 0, losses: 1, gf: 4, ga: 6, gd: -2, points: 0 },
  { name: 'Hallelujah FC', played: 1, wins: 0, draws: 0, losses: 1, gf: 3, ga: 6, gd: -3, points: 0 },
  { name: 'Kabod FC', played: 1, wins: 1, draws: 0, losses: 0, gf: 6, ga: 3, gd: 3, points: 3 },
  { name: 'Mehanaym FC', played: 1, wins: 0, draws: 0, losses: 1, gf: 2, ga: 4, gd: -2, points: 0 },
  { name: 'Rehoboth FC', played: 1, wins: 1, draws: 0, losses: 0, gf: 6, ga: 4, gd: 2, points: 3 },
  { name: 'Zablon FC', played: 1, wins: 1, draws: 0, losses: 0, gf: 4, ga: 2, gd: 2, points: 3 },
]

export default function Table() {

  const sortedTeams = [...teams].sort((a, b) => {
    if (b.points !== a.points) {
      return b.points - a.points
    }
    return b.gd - a.gd
  })

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border border-border rounded-lg overflow-hidden">
        <thead className="bg-secondary">
          <tr className="text-left text-sm text-muted-foreground uppercase">
            <th className="p-3">#</th>
            <th className="p-3">Team</th>
            <th className="p-3">P</th>
            <th className="p-3">W</th>
            <th className="p-3">D</th>
            <th className="p-3">L</th>
            <th className="p-3">GF</th>
            <th className="p-3">GA</th>
            <th className="p-3">GD</th>
            <th className="p-3">Pts</th>
          </tr>
        </thead>

        <tbody>
          {sortedTeams.map((team, index) => (
            <tr
              key={index}
              className="border-t border-border hover:bg-muted/50 transition"
            >
              <td className="p-3 font-semibold">{index + 1}</td>
              <td className="p-3">{team.name}</td>
              <td className="p-3">{team.played}</td>
              <td className="p-3">{team.wins}</td>
              <td className="p-3">{team.draws}</td>
              <td className="p-3">{team.losses}</td>
              <td className="p-3">{team.gf}</td>
              <td className="p-3">{team.ga}</td>
              <td className="p-3">{team.gd}</td>
              <td className="p-3 font-bold text-accent">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
