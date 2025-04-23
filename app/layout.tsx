import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Menu, X, Twitter, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IPL T20 Dashboard",
  description: "Live IPL T20 cricket match information, points table, and schedule"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem> */}
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <header className="border-b bg-white shadow-sm">
              <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    IPL
                  </div>
                  <h1 className="text-xl font-bold hidden md:block">IPL T20 Dashboard</h1>
                </div>

                 {/* Social Media Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://twitter.com/IPL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <Twitter size={18} />
              <span className="sr-only">IPL Twitter</span>
            </a>
            <a
              href="https://www.facebook.com/IPL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook size={18} />
              <span className="sr-only">IPL Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/iplt20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram size={18} />
              <span className="sr-only">IPL Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/user/IPL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              <Youtube size={18} />
              <span className="sr-only">IPL YouTube</span>
            </a>
          </div>
                {/* <nav className="flex gap-4">
                  <a href="#" className="text-sm font-medium hover:text-blue-600">
                    Home
                  </a>
                  <a href="#" className="text-sm font-medium hover:text-blue-600">
                    Teams
                  </a>
                  <a href="#" className="text-sm font-medium hover:text-blue-600">
                    Stats
                  </a>
                  <a href="#" className="text-sm font-medium hover:text-blue-600">
                    News
                  </a>
                </nav> */}
              </div>
            </header>
            {children}
            <footer className="border-t bg-white py-6 mt-12">
              <div className="container mx-auto px-4 text-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} IPL T20 Dashboard. All rights reserved.</p>
                <p className="mt-1">This is a demo application using dummy data.</p>
              </div>
            </footer>
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
