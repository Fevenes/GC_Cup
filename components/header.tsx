import Link from 'next/link'
import { Trophy } from 'lucide-react'

export default function Header() {
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
          <Link href="/teams" className="text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors">
            TEAMS
          </Link>
          <Link href="/" className="text-foreground font-semibold text-sm hover:text-accent transition-colors">
            BRACKET
          </Link>
          <Link href="/fixtures" className="text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors">
            FIXTURES
          </Link>
          <Link href="/table" className="text-muted-foreground font-semibold text-sm hover:text-foreground transition-colors">
            TABLE
          </Link>
        </nav>
      </div>
    </header>
  )
}