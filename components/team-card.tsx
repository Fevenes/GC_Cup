'use client'

interface TeamCardProps {
  team: {
    id: number
    name: string
    shortCode: string
    players: string[]
    badge: string
    badgeIcon: string
  }
}

export default function TeamCard({ team }: TeamCardProps) {
  const displayPlayers = team.players.slice(0, 7)

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors">
      {/* Team Header */}
      <div className="mb-6">
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">
          {team.shortCode.split(' ')[0]}
        </p>
        <h3 className="text-xl font-bold text-white">
          {team.name}
        </h3>
      </div>

      {/* Players List */}
      <div className="space-y-2 mb-6 min-h-[180px]">
        {displayPlayers.map((player, idx) => (
          <p key={idx} className="text-sm text-muted-foreground font-medium">
            {player}
          </p>
        ))}
        {team.players.length > 7 && (
          <p className="text-xs text-muted-foreground italic">
            +{team.players.length - 7} more
          </p>
        )}
      </div>

      {/* Badge */}
      <div className="border-t border-border pt-4 flex items-center gap-2">
        <span className="text-primary font-bold text-lg">{team.badgeIcon}</span>
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          {team.badge}
        </p>
      </div>
    </div>
  )
}
