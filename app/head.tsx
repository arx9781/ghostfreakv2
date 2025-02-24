import { Metadata } from 'next'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'aditya rych',
    template: '%s',
  },
  description: 'a place thy user may find when he who needs it the most',
  openGraph: {
    title: 'aditya rych',
    description: 'a place thy user may find when he who needs it the most',
    url: baseUrl,
    siteName: 'aditya rych',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Head() {
  return null;
}