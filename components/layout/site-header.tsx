"use client"

import { usePathname } from "next/navigation"
import Ticker from "./ticker"
import Navbar from "./navbar"

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <>
      {pathname === "/" && <Ticker />}
      <Navbar />
    </>
  )
}
