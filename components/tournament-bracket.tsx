'use client'

import { Shield, Target, Trophy } from 'lucide-react'

interface Match {
  team1: string
  team2: string
  score1: number
  score2: number
}

const quarterFinals: Match[] = [
  { team1: 'Zablon FC', team2: 'Mehanaym FC', score1: 4, score2: 2 },
  { team1: 'Believers FC', team2: 'Rehoboth FC', score1: 0, score2: 0 },
  { team1: 'Rehoboth FC', team2: 'Fares FC', score1: 6, score2: 4 },
  { team1: 'Kabod FC', team2: 'Hallelujah FC', score1: 6, score2: 3 },
  { team1: 'Believers FC', team2: 'Anointed FC', score1: 5, score2: 0 },
  { team1: 'Kabod FC', team2: 'Anointed FC', score1: 0, score2: 0 },
  { team1: 'Mehanaym FC', team2: 'Fares FC', score1: 0, score2: 0 },
  { team1: 'Zablon FC', team2: 'Hallelujah FC', score1: 0, score2: 0 },
]

const semiFinals: Match[] = [
  { team1: 'Unknown', team2: 'Unknown', score1: 0, score2: 0 },
  { team1: 'Unknown', team2: 'Unknown', score1: 0, score2: 0 },
]

export default function TournamentBracket() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* COLUMN 1 - QUARTER FINALS */}
        <div className="flex flex-col gap-3">
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

        {/* COLUMN 2 - SEMI FINALS */}
        <div className="flex flex-col">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center mb-8">
            SEMI FINALS
          </h3>

          {/* pushed lower to match second image */}
          <div className="pt-36 space-y-36">
            {semiFinals.map((match, idx) => (
              <div
                key={idx}
                className="w-full max-w-[240px] bg-secondary/80 border border-border rounded-md px-4 py-4 relative"
              >
                <div className="absolute left-0 top-0 h-full w-[3px] bg-accent rounded-l-md" />

                <div className="flex items-center justify-between pl-2">
                  <span className="text-foreground font-medium text-sm">
                    {match.team1}
                  </span>
                  <span className="text-accent font-bold text-lg">
                    {match.score1}
                  </span>
                </div>

                <div className="flex items-center justify-between pl-2 mt-3">
                  <span className="text-foreground font-medium text-sm">
                    {match.team2}
                  </span>
                  <span className="text-accent font-bold text-lg">
                    {match.score2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 3 - GRAND FINAL FEATURED MATCH */}
        <div className="flex flex-col">
          <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center mb-8">
            THE GRAND FINAL
          </h3>

          <div className="pt-52">
            <div className="w-full bg-secondary border border-border rounded-lg p-6 shadow-[0_0_30px_rgba(0,180,255,0.06)]">
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
                  <p className="text-xs font-semibold text-foreground">
                    UNKNOWN
                  </p>
                </div>

                <p className="text-xl font-bold text-primary">VS</p>

                <div className="flex-1 text-center flex flex-col items-center">
                  <Target className="w-6 h-6 mb-2 text-primary" />
                  <p className="text-xs font-semibold text-foreground">
                    UNKNOWN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 4 - CHAMPION ONLY */}
        <div className="flex flex-col items-center justify-start">
          <div className="pt-36 w-full">
            <div className="w-full rounded-xl border border-white/10 bg-secondary/90 p-8 text-center shadow-[0_0_55px_rgba(125,160,255,0.18)] relative overflow-hidden">
              {/* glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" />
              <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-24 bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_70%)] blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <Trophy className="w-14 h-14 mx-auto mb-4 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.55)]" />
                <h2 className="text-3xl font-bold text-white mb-2">CHAMPION</h2>

                <div className="w-10 h-[3px] bg-accent mx-auto rounded-full mb-3" />

                <p className="text-muted-foreground text-sm mb-8">TBD</p>

                <div className="border-t border-border pt-5 mb-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    PRIZE POOL
                  </p>
                  <p className="text-2xl font-bold text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]">
                    GOLDEN CUP
                  </p>
                </div>

                <div className="border-t border-border pt-5">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    SEASON
                  </p>
                  <p className="text-4xl font-bold text-white">
                    2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
