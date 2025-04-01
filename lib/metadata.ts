import { Metadata } from 'next'

const defaultMetadata: Metadata = {
  title: {
    default: 'Tonmoy Infrastructure & Vision',
    template: '%s | Tonmoy Infrastructure & Vision'
  },
  description: 'Enterprise-grade hosting, DNS, and website security services for businesses of all sizes.',
  keywords: [
    'cloud infrastructure',
    'web security',
    'DDoS protection',
    'DNS management',
    'enterprise hosting',
    'CDN',
    'load balancing',
    'cloud services'
  ],
  authors: [{ name: 'Tonmoy Infrastructure & Vision' }],
  creator: 'Tonmoy Infrastructure & Vision',
  publisher: 'Tonmoy Infrastructure & Vision',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tonmoyiv.com',
    siteName: 'Tonmoy Infrastructure & Vision',
    title: 'Tonmoy Infrastructure & Vision',
    description: 'Enterprise-grade hosting, DNS, and website security services for businesses of all sizes.',
    images: [
      {
        url: 'https://tonmoyiv.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tonmoy Infrastructure & Vision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tonmoy Infrastructure & Vision',
    description: 'Enterprise-grade hosting, DNS, and website security services for businesses of all sizes.',
    creator: '@tonmoyiv',
    images: ['https://tonmoyiv.com/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: 'https://tonmoyiv.com',
    languages: {
      'en-US': 'https://tonmoyiv.com',
    },
  },
  other: {
    'theme-color': '#FF6B2C',
  },
}

export function constructMetadata({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  keywords = defaultMetadata.keywords,
  openGraph = defaultMetadata.openGraph,
  twitter = defaultMetadata.twitter,
  robots = defaultMetadata.robots,
  ...rest
}: Partial<Metadata> = {}): Metadata {
  return {
    ...defaultMetadata,
    title,
    description,
    keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...twitter,
    },
    robots,
    ...rest,
  }
}