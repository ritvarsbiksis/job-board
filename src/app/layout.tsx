import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components/header/header'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4 px-6  mx-auto container max-w-auto">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
