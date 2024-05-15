import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: 'React Challenge',
  description: 'You control React. React does not control you.'
}

type RootLayoutProps = {
    children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
    const { children } = props
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-emerald-800 to-emerald-950">{children}</body>
    <br/>
    <br/>
    </html>
  )
}
