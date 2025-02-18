import { CurrentlyPlaying, RecentlyPlayed } from './components'
import { ScrollShadow } from 'app/components/scroll-shadow'

export const metadata = {
  title: 'spotify stats',
  description: 'My Spotify Stats',
}

export default function SpotifyPage() {
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_300px]">
      <div className="space-y-8">
        <CurrentlyPlaying />
        <RecentlyPlayed />
      </div>
      
      <div className="p-6 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800">
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