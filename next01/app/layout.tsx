import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {

      }
      <head />
      <body className={inter.className}>
      <nav>
        <h1>Navigation</h1>
      </nav>
      {children}
      </body>
    </html>
  )
}
