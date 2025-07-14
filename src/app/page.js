// src/app/page.js
'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // helper to toggle
  const toggleSidebar = () => setSidebarOpen(prev => !prev)
  return (
    <div className="app-container">
      {/* Sidebar: only render when open */}
      {sidebarOpen && (
        <nav className="sidebar">
          <ul>
            <li><a href="#">Mekan Bilgileri</a></li>
            <li><a href="#">Mekan İstatistikleri</a></li>
            <li><a href="#">Mekan Yorumları</a></li>
            <li><a href="#">Profil</a></li>
          </ul>
        </nav>
      )}

      {/* Main content */}
       <main className={`content ${sidebarOpen ? 'with-sidebar' : ''}`}>
        {/* menu button */}
        <button
          className="menu-button"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className="logo-wrapper">
          <Image
            src="/logo.png"
            alt="Çıvgın Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <h1 className="welcome-title">Çıvgın&apos;a Hoşgeldiniz!</h1>
      </main>
    </div>
  )
}
