'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Trophy, Users, Calendar, Table as TableIcon } from 'lucide-react'

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden z-50">
      <div className="flex items-center justify-around">

        <Link
          href="/"
          className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${
            isActive('/') ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Trophy className="w-6 h-6" />
          <span className="text-xs uppercase tracking-wider font-semibold">Bracket</span>
        </Link>

        <Link
          href="/teams"
          className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${
            isActive('/teams') ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs uppercase tracking-wider font-semibold">Teams</span>
        </Link>

        <Link
          href="/fixtures"
          className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${
            isActive('/fixtures') ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs uppercase tracking-wider font-semibold">Fixtures</span>
        </Link>

        {/* ✅ NEW TABLE */}
        <Link
          href="/table"
          className={`flex-1 flex flex-col items-center justify-center py-3 gap-1 transition-colors ${
            isActive('/table') ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          <TableIcon className="w-6 h-6" />
          <span className="text-xs uppercase tracking-wider font-semibold">Table</span>
        </Link>

      </div>
    </nav>
  )
}