// src/app/layout.js
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Çıvgın',
  description: 'Mekan yönetim paneli',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {/* Wrap *all* your app in the NextAuth provider */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
