import { CurrentlyPlaying, RecentlyPlayed } from './components'
import { ScrollShadow } from 'app/components/scroll-shadow'

export const metadata = {
  title: 'spotify stats',
  description: 'My Spotify Stats',
}

export default function SpotifyPage() {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_250px] pb-12">
      <div className="space-y-6">
        <CurrentlyPlaying />
        <RecentlyPlayed />
      </div>
      
      <div className="p-4 bg-neutral-100/30 dark:bg-neutral-900/30 rounded-lg border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm">
        <h2 className="text-lg font-medium mb-4">Listening Patterns</h2>
        <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
          <p>• Primarily electronic sounds</p>
          <p>• 62% instrumental tracks</p>
          <p>• Average tempo: 128 BPM</p>
        </div>
      </div>
      <ScrollShadow />
    </div>
  )
}