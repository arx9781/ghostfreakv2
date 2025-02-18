// app/spotify/page.tsx
import { CurrentlyPlaying, RecentlyPlayed } from './components'

export default function SpotifyPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Spotify Stats
      </h1>
      <div className="space-y-10">
        <CurrentlyPlaying />
        <RecentlyPlayed />
      </div>
    </section>
  )
}