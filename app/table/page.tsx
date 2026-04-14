'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Navigation from '@/components/navigation'
import Table from '@/components/table'

export default function TablePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 px-4 py-8 md:px-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-2">
              ASTUECSF GC-CUP
            </p>
            <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase mb-4">
              STANDINGS
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              TABLE
            </h1>
            <p className="text-muted-foreground text-base">
              Current tournament rankings
            </p>
          </div>

          <Table />
        </div>
      </main>

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