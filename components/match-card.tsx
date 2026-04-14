'use client'

import { Shield, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface MatchCardProps {
  match: {
    id: number
    matchNumber: number
    team1: string
    team2: string
    date: string
    time: string
    location: string
    isLive: boolean
    status: string
  }
}

export default function MatchCard({ match }: MatchCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
            MATCH {String(match.matchNumber).padStart(2, '0')}
          </p>
        </div>
        {match.isLive && (
          <Badge className="bg-accent text-background hover:bg-accent/90">
            <span className="w-2 h-2 bg-background rounded-full mr-2 animate-pulse"></span>
            LIVE {match.status}
          </Badge>
        )}
      </div>

      {/* Teams */}
      <div className="flex items-center gap-4 mb-6">
        {/* Team 1 */}
        <div className="flex-1 text-center">
          <Shield className="w-8 h-8 mx-auto mb-2 text-primary" />
          <p className="text-lg font-bold text-white">{match.team1}</p>
        </div>

        {/* VS */}
        <p className="text-accent font-bold text-xl">VS</p>

        {/* Team 2 */}
        <div className="flex-1 text-center">
          <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
          <p className="text-lg font-bold text-white">{match.team2}</p>
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
