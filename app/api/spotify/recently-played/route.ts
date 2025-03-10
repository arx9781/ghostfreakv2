import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' 

export async function GET() {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token!,
    }),
  })

  const { access_token } = await tokenResponse.json()

  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  const data = await response.json()

  if (!data?.items) {
    return NextResponse.json([])
  }

  return NextResponse.json(data.items.map((item: any) => ({
    title: item.track.name,
    artist: item.track.artists.map((artist: any) => artist.name).join(', '),
    album: item.track.album.name,
    albumArt: item.track.album.images[0].url,
    songUrl: item.track.external_urls.spotify,
    playedAt: new Date(item.played_at).toLocaleString(),
  })))
}