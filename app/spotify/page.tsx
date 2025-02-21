import { CurrentlyPlaying, RecentlyPlayed } from "./components";
import { ScrollShadow } from "app/components/scroll-shadow";
import { BackButton } from "app/components/back-button";

export const metadata = {
  title: "spotify stats",
  description: "My Spotify Stats",
};

export default function SpotifyPage() {
  return (
    <>
      <BackButton />
      <div className="grid gap-8 md:grid-cols-[1fr] pb-12">
        <div className="space-y-6">
          <CurrentlyPlaying />
          <RecentlyPlayed />
        </div>
        <ScrollShadow />
      </div>
    </>
  );
}
