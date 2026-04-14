'use client'

import Link from 'next/link'
import { Trophy } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const linkClass = (path: string) =>
    pathname === path
      ? 'text-foreground font-semibold text-sm'
      : 'text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors'

  return (
    <header className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-8 md:py-6 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Trophy className="w-6 h-6 text-accent" />
          <span className="text-white font-bold tracking-wider">
            ASTUECSF GC-CUP
          </span>
        </Link>

        <nav className="hidden md:flex gap-8">

          <Link href="/" className={linkClass('/')}>
            BRACKET
          </Link>
          
          <Link href="/teams" className={linkClass('/teams')}>
            TEAMS
          </Link>

          <Link href="/fixtures" className={linkClass('/fixtures')}>
            FIXTURES
          </Link>

          <Link href="/table" className={linkClass('/table')}>
            TABLE
          </Link>

        </nav>
      </div>
    </header>
  )
}