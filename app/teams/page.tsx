'use client'

import Header from '@/components/header'
import Navigation from '@/components/navigation'
import TeamCard from '@/components/team-card'

const teams = [
  {
    id: 1,
    name: 'ZABLON FC',
    shortCode: 'ZABLON FC',
    players: ['YABBIRA (C)', 'GUDEtA A.', 'EYU A.', 'BEREKET K.', 'MISGANA T.', 'YORDANOS A.', 'HÄKIME'],
    badge: 'ELITE DIVISION',
    badgeIcon: '◯'
  },
  {
    id: 2,
    name: 'MEHANAYM FC',
    shortCode: 'MEHANAYM FC',
    players: ['MINTERINOT (C)', 'ROBSEN', 'NATAN MULETA', 'NAOL FIKADU', 'YOMIYOU G.', 'CHALA R.', 'BINYAM'],
    badge: 'PRESTIGE BOOSTER',
    badgeIcon: '◎'
  },
  {
    id: 3,
    name: 'BELIEVERS FC',
    shortCode: 'BELIEVERS FC',
    players: ['YONAS (C)', 'BIRUK S.', 'ENDALKACHEW G.', 'MELAL F.', 'NAHUNDA B.', 'ALAZAR A.', 'GEDION'],
    badge: 'ELITE DIVISION',
    badgeIcon: '⚡'
  },
  {
    id: 4,
    name: 'REHOBOTH FC',
    shortCode: 'REHOBOTH FC',
    players: ['AMANUEL K. (C)', 'NATHANEL W.', 'KIRUBEL K.', 'NATNAEL D.', 'HENOK H.', 'DAWIT D.', 'YAKOB'],
    badge: 'DEFENSE POWER',
    badgeIcon: '⊞'
  },
  {
    id: 5,
    name: 'FARES FC',
    shortCode: 'FARES FC',
    players: ['TEDELA A. (C)', 'MOGES T.', 'SHELELE N.', 'ALAZAR', 'BIRUK', 'YISHAK M.', 'SAMUEL T.'],
    badge: 'MASTER TACTICIAN',
    badgeIcon: '◀'
  },
  {
    id: 6,
    name: 'KABOD FC',
    shortCode: 'KABOD FC',
    players: ['TINSAE (C)', 'ASHENAFI', 'BEREKET S.', 'ISRAEL', 'GABRIEL', 'DUBA', 'SAMSON'],
    badge: 'FUTURE LEGENDS',
    badgeIcon: '☆'
  },
  {
    id: 7,
    name: 'HALLELUJAH FC',
    shortCode: 'HALLELUJAH FC',
    players: ['DANIEL L. (C)', 'KENASA T.', 'BINYAM M.', 'DAWIT A.', 'SOLOMON D.', 'ERMIYAS W.', 'TEDELA'],
    badge: 'UNITY ROSTER',
    badgeIcon: '✦'
  },
  {
    id: 8,
    name: 'ANOINTED FC',
    shortCode: 'ANOINTED FC',
    players: ['SURAFEL T. (C)', 'YONATAN W.', 'KIRUBEL D.', 'FENAN Y.', 'TARIKU T.', 'TIKIKOS A.', 'KENASA'],
    badge: 'CHAMPIONSHIP MENTALITY',
    badgeIcon: '✧'
  }
]

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 px-4 py-8 md:px-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              OFFICIAL TEAM ROSTERS 2026
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              <span className="text-white">THE TEAMS OF </span>
              <span className="text-accent">ASTUECSF GC-CUP</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Witness the clash of legends. Eight elite squads finalized for the ultimate tournament.
            </p>
          </div>

          {/* Teams Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center py-8 border-t border-border">
            <p className="text-muted-foreground text-lg uppercase tracking-widest">
              ◎ READY FOR KICKOFF ◎
            </p>
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
