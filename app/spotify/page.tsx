import { CurrentlyPlaying, RecentlyPlayed } from "./components";
import { BackButton } from "app/components/back-button";

export const metadata = {
  title: "spotify stats",
  description: "My Spotify Stats",
};

export default function SpotifyPage() {
  return (
    <div className="min-h-screen">
      <BackButton />
      <div className="grid gap-8 md:grid-cols-[1fr] pb-12">
        <div className="space-y-6">
          <CurrentlyPlaying />
          <RecentlyPlayed />
        </div>
      </div>
    </div>
  );
}
