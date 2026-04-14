'use client'

import Link from 'next/link'
import Header from '@/components/header'
import TournamentBracket from '@/components/tournament-bracket'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 md:px-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              ASTUECSF GC-CUP
            </p>
            <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase mb-4">
              KNOCKOUT STAGE
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
              TOURNAMENT BRACKET
            </h1>
            <p className="text-muted-foreground text-base">
              The Road to the Eternal Glory of ASTUECSF GC-CUP
            </p>
          </div>

          {/* Bracket */}
          <div className="mb-12">
            <TournamentBracket />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 md:px-8 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 ASTUECSF GC-CUP. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
              TERMS OF SERVICE
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-xs transition-colors">
              SUPPORT
            </Link>
          </div>
        </div>
      </footer>

      <Navigation />
    </div>
  )
}