import type { Metadata } from "next"
import { Sora, Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import Ticker from "@/components/layout/ticker"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--f-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--f-body",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Muhammad Maaz | Full Stack Developer (MERN & Next.js) — Karachi",
  description:
    "Muhammad Maaz is a Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore projects, experience, and get in touch for freelance or full-time roles.",
  metadataBase: new URL("https://muhammadmaazportfolio-pied.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Muhammad Maaz | Full Stack Developer (MERN & Next.js)",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
    url: "https://muhammadmaazportfolio-pied.vercel.app/",
    images: ["https://muhammadmaazportfolio-pied.vercel.app/images/maaz.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Maaz",
  url: "https://muhammadmaazportfolio-pied.vercel.app/",
  jobTitle: "Full Stack Developer",
  email: "mailto:maazm6387@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
  knowsAbout: ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript", "FastAPI", "MERN Stack"],
  sameAs: ["https://www.linkedin.com/in/muhammad-maaz-3a1838208/"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Toaster position="top-center" richColors />
        <Ticker />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
