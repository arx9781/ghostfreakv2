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

  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })

  if (response.status === 204) {
    return NextResponse.json({ isPlaying: false },
      {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      }
    )
  }

  const data = await response.json()
  if (!data?.item) {
    return NextResponse.json({ isPlaying: false })
  }

  return NextResponse.json({
    isPlaying: true,
    title: data.item.name,
    artist: data.item.artists.map((artist: any) => artist.name).join(', '),
    album: data.item.album.name,
    albumArt: data.item.album.images[0].url,
    songUrl: data.item.external_urls.spotify,
  })
}