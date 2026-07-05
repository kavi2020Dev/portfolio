import type { Metadata } from "next"
import { DM_Sans, Manrope } from "next/font/google"
import "@/styles/globals.css"
import ProviderSetup from "@/components/provider/Provider"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Kavi K — Frontend Engineer",
  description:
    "Frontend Engineer with 4+ years independently architecting and shipping 12+ production-grade applications with React, Next.js, TypeScript, React Native, Electron.js, and Node.js.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${manRope.variable} antialiased`}>
        <ProviderSetup>{children}</ProviderSetup>
      </body>
    </html>
  )
}
