'use client'

import { Shield, Target, Trophy } from 'lucide-react'

interface Match {
  team1: string
  team2: string
  score1: number
  score2: number
}

const quarterFinals: Match[] = [
  { team1: 'Zablon FC', team2: 'Mehanaym FC', score1: 0, score2: 0 },
  { team1: 'Believers FC', team2: 'Rehoboth FC', score1: 0, score2: 0 },
  { team1: 'Rehoboth FC', team2: 'Fares FC', score1: 0, score2: 0 },
  { team1: 'Kabod FC', team2: 'Hallelujah FC', score1: 0, score2: 0 },
  { team1: 'Believers FC', team2: 'Anointed FC', score1: 0, score2: 0 },
  { team1: 'Kabod FC', team2: 'Anointed FC', score1: 0, score2: 0 },
  { team1: 'Mehanaym FC', team2: 'Fares FC', score1: 0, score2: 0 },
  { team1: 'Zablon FC', team2: 'Hallelujah FC', score1: 0, score2: 0 },
]

const semiFinals: Match[] = [
  { team1: 'Unknown', team2: 'Unknown', score1: 0, score2: 0 },
  { team1: 'Unknown', team2: 'Unknown', score1: 0, score2: 0 },
]

const grandFinal: Match = { team1: 'Unknown', team2: 'Unknown', score1: 0, score2: 0 }

export default function TournamentBracket() {
  return (
    <div className="w-full overflow-x-auto ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Quarter Finals Column */}
        <div className="lg:col-span-1 flex flex-col gap-3">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            QUARTER FINALS
          </h3>
          <div className="flex flex-col gap-3">
            {quarterFinals.map((match, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex items-center justify-between bg-secondary border border-border rounded px-2 py-2">
                  <span className="text-foreground font-medium text-xs">
                    {match.team1}
                  </span>
                  <span className="text-accent font-bold text-sm">
                    {match.score1}
                  </span>
                </div>
                <div className="flex items-center justify-between bg-secondary border border-border rounded px-2 py-2">
                  <span className="text-foreground font-medium text-xs">
                    {match.team2}
                  </span>
                  <span className="text-accent font-bold text-sm">
                    {match.score2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Semi Finals and Grand Final Center */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center gap-8">
          {/* Semi Finals */}
          <div className="w-full max-w-xs">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4 text-center">
              SEMI FINALS
            </h3>
            <div className="space-y-4">
              {semiFinals.map((match, idx) => (
                <div key={idx} className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium text-sm">{match.team1}</span>
                    <span className="text-accent font-bold text-lg">{match.score1}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium text-sm">{match.team2}</span>
                    <span className="text-accent font-bold text-lg">{match.score2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Match */}
          <div className="w-full max-w-xs bg-secondary border border-border rounded-lg p-6">
            <div className="text-center mb-6">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">
                DAY SOON 00
              </p>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                FUTSAL • 00:00
              </p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center flex flex-col items-center">
                <Shield className="w-6 h-6 mb-2 text-primary" />
                <p className="text-xs font-semibold text-foreground">UNKNOWN</p>
              </div>
              <p className="text-xl font-bold text-primary">VS</p>
              <div className="flex-1 text-center flex flex-col items-center">
                <Target className="w-6 h-6 mb-2 text-primary" />
                <p className="text-xs font-semibold text-foreground">UNKNOWN</p>
              </div>
            </div>
          </div>
        </div>

        {/* Champion Section Right Column */}
        <div className="lg:col-span-1 flex flex-col items-center justify-start gap-6">
          <div className="w-full text-center">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
              THE GRAND FINAL
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between bg-secondary border border-border rounded px-2 py-2">
                <span className="text-foreground font-medium text-xs">{grandFinal.team1}</span>
                <span className="text-accent font-bold text-sm">{grandFinal.score1}</span>
              </div>
              <div className="flex items-center justify-between bg-secondary border border-border rounded px-2 py-2">
                <span className="text-foreground font-medium text-xs">{grandFinal.team2}</span>
                <span className="text-accent font-bold text-sm">{grandFinal.score2}</span>
              </div>
            </div>
          </div>

          {/* Trophy Section */}
          <div className="w-full bg-secondary border border-border rounded-lg p-6 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-accent" />
            <h2 className="text-xl font-bold text-white mb-2">CHAMPION</h2>
            <p className="text-muted-foreground text-sm mb-4">TBD</p>
            
            <div className="border-t border-border pt-3 mb-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                PRIZE POOL
              </p>
              <p className="text-lg font-bold text-accent">GOLDEN CUP</p>
            </div>
            
            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                SEASON
              </p>
              <p className="text-2xl font-bold text-white">2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
