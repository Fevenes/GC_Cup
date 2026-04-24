'use client'

import Header from '@/components/header'
import Navigation from '@/components/navigation'
import MatchCard from '@/components/match-card'
import { Calendar, Clock, MapPin } from 'lucide-react'

const matches = [
  // COMPLETED MATCHES
  {
    id: 1,
    matchNumber: 1,
    team1: 'REHOBOTH FC',
    team2: 'FARES FC',
    score1: 6,
    score2: 4,
    scorers1: ['Yakob x3', 'Hena x2', 'Kira'],
    scorers2: ['Biruk x3', 'Shelele'],
    date: 'COMPLETED',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'FINISHED'
  },
  {
    id: 2,
    matchNumber: 2,
    team1: 'ZABLON FC',
    team2: 'MEHANAYM FC',
    score1: 4,
    score2: 2,
    scorers1: ['Misege x3', 'Natan'],
    scorers2: ['Gude', 'Nati'],
    date: 'COMPLETED',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'FINISHED'
  },
  {
    id: 3,
    matchNumber: 3,
    team1: 'BELIEVERS FC',
    team2: 'ANOINTED FC',
    score1: 5,
    score2: 0,
    scorers1: [],
    scorers2: [],
    date: 'COMPLETED',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'FINISHED'
  },
  {
    id: 4,
    matchNumber: 4,
    team1: 'KABOD FC',
    team2: 'HALLELUJAH FC',
    score1: 6,
    score2: 3,
    scorers1: [],
    scorers2: [],
    date: 'COMPLETED',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'FINISHED'
  },

  // UPCOMING MATCHES
  {
    id: 5,
    matchNumber: 1,
    team1: 'KABOD FC',
    team2: 'ANOINTED FC',
    date: 'N/A',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'LIVE SOON'
  },
  {
    id: 6,
    matchNumber: 2,
    team1: 'BELIEVERS FC',
    team2: 'REHOBOTH FC',
    date: 'N/A',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'SCHEDULED'
  },
  {
    id: 7,
    matchNumber: 1,
    team1: 'MEHANAYM FC',
    team2: 'FARES FC',
    date: 'N/A',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'LIVE SOON'
  },
  {
    id: 8,
    matchNumber: 2,
    team1: 'ZABLON FC',
    team2: 'HALLELUJAH FC',
    date: 'N/A',
    time: 'N/A',
    location: 'FUTSAL',
    isLive: false,
    status: 'SCHEDULED'
  }
]

export default function FixturesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 md:px-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              OFFICIAL COMPETITION
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              <span className="text-white">FOOTBALL </span>
              <span className="text-accent">TOURNAMENT</span>
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              FIRST ROUND FIXTURES | SEASON 2024 | GLOBAL ARENA
            </p>
          </div>

          {/* Matches */}
          <div className="space-y-4 mb-12">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>

          {/* Schedule Info */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Match Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex gap-3">
                <Calendar className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Date</p>
                  <p className="text-foreground font-semibold">April - May 2025</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Time</p>
                  <p className="text-foreground font-semibold">Check per match</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Venue</p>
                  <p className="text-foreground font-semibold">Global Arena</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 md:px-8 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 ASTUECSF GC-CUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              SUPPORT
            </a>
          </div>
        </div>
      </footer>

      <Navigation />
    </div>
  )
}
