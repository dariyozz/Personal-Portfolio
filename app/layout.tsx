import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dario Jakovleski - Computer Science Student & Software Engineer",
  description:
    "Portfolio of Dario Jakovleski, a 4th year Computer Science student at FINKI specializing in full-stack development, DevOps, cloud computing, cybersecurity, and machine learning. Showcasing projects in Spring Boot, React, Kubernetes, and AI.",
  keywords: [
    "Dario Jakovleski",
    "Full-Stack Developer",
    "Software Engineer",
    "Computer Science",
    "FINKI",
    "Spring Boot",
    "React",
    "DevOps",
    "Kubernetes",
    "Machine Learning",
    "AI",
    "Cloud Computing",
    "Cybersecurity",
    "Application Security",
    "Penetration Testing",
    "Portfolio",
    "Skopje",
    "Macedonia",
  ],
  authors: [{ name: "Dario Jakovleski", url: "https://github.com/dariyozz" }],
  creator: "Dario Jakovleski",
  publisher: "Dario Jakovleski",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dariojakovleski.vercel.app",
    title: "Dario Jakovleski - Computer Science Student & Software Engineer",
    description:
      "Portfolio showcasing full-stack development, DevOps, cybersecurity, and machine learning projects by a FINKI Computer Science student",
    siteName: "Dario Jakovleski Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dario Jakovleski Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dario Jakovleski - Computer Science Student & Software Engineer",
    description: "Portfolio showcasing full-stack development, DevOps, cybersecurity, and machine learning projects",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://dariojakovleski.vercel.app",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#84cc16" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <div className="theme-wrapper">
            <Navigation />
            <Suspense>
              <main>{children}</main>
            </Suspense>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
