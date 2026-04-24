'use client'

import { Shield, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface MatchCardProps {
  match: {
    id: number
    matchNumber: number
    team1: string
    team2: string
    score1?: number | string
    score2?: number | string
    scorers1?: string[]
    scorers2?: string[]
    date: string
    time: string
    location: string
    isLive: boolean
    status: string
  }
}

export default function MatchCard({ match }: MatchCardProps) {
  const isFinished = match.status === 'FINISHED'

  return (
    <div className={`bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors ${isFinished ? 'opacity-90' : ''}`}>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            MATCH {String(match.matchNumber).padStart(2, '0')}
          </p>
        </div>

        {match.isLive ? (
          <Badge className="bg-accent text-background hover:bg-accent/90">
            <span className="w-2 h-2 bg-background rounded-full mr-2 animate-pulse"></span>
            LIVE {match.status}
          </Badge>
        ) : (
          <Badge
            variant="outline"
            className={`${isFinished ? 'border-muted-foreground text-muted-foreground' : 'border-accent text-accent'}`}
          >
            {match.status}
          </Badge>
        )}
      </div>

      {/* Teams & Score */}
      <div className="flex items-start gap-4 mb-6">
        
        {/* Team 1 */}
        <div className="flex-1 text-center">
          <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
          <p className="text-lg font-bold text-white">{match.team1}</p>

          {isFinished && match.scorers1 && (
            <div className="mt-2 text-xs text-muted-foreground space-y-1">
              {match.scorers1.map((s, i) => (
                <p key={i}>⚽ {s}</p>
              ))}
            </div>
          )}
        </div>

        {/* Score */}
        <div className="flex flex-col items-center justify-center min-w-[80px]">
          {isFinished ? (
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-white">{match.score1}</span>
              <span className="text-muted-foreground text-xl">:</span>
              <span className="text-3xl font-black text-white">{match.score2}</span>
            </div>
          ) : (
            <p className="text-accent font-bold text-xl tracking-tighter">VS</p>
          )}
        </div>

        {/* Team 2 */}
        <div className="flex-1 text-center">
          <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
          <p className="text-lg font-bold text-white">{match.team2}</p>

          {isFinished && match.scorers2 && (
            <div className="mt-2 text-xs text-muted-foreground space-y-1">
              {match.scorers2.map((s, i) => (
                <p key={i}>⚽ {s}</p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Match Details */}
      <div className="border-t border-border pt-4 grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            Date
          </p>
          <p className="text-sm font-medium text-foreground">{match.date}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            Time
          </p>
          <p className="text-sm font-medium text-foreground">{match.time}</p>
        </div>

        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            Venue
          </p>
          <p className="text-sm font-medium text-foreground">{match.location}</p>
        </div>
      </div>
    </div>
  )
}
