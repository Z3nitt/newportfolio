import React from "react"
import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'

import './globals.css'



const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  title: 'Developer Portfolio | Full Stack Developer & DBA',
  description: 'Junior Full Stack Developer & Database Administrator portfolio showcasing projects, skills, and experience in web development and database management.',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  themeColor: '#0a0a0c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
