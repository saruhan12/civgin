'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(prev => !prev)

  return (
    <>
      {/* Menü butonu */}
      <button
        className="menu-button shadow-md"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Logo sağ üst köşede */}
      <div className="fixed top-4 right-4 z-20">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Çıvgın Logo"
            width={32}
            height={32}
            className="cursor-pointer"
            priority
          />
        </Link>
      </div>

      {/* Sidebar içeriği */}
      {open && (
        <nav className="sidebar">
          <ul>
            <li>
              <Link
                href="/mekan-bilgileri"
                className="text-lg font-medium hover:text-green-600"
              >
                Mekan Bilgileri
              </Link>
            </li>
            <li>
              <Link
                href="/mekan-istatistikleri"
                className="text-lg font-medium hover:text-yellow-600"
              >
                Mekan İstatistikleri
              </Link>
            </li>
            <li>
              <Link
                href="/mekan-yorumlari"
                className="text-lg font-medium hover:text-blue-600"
              >
                Mekan Yorumları
              </Link>
            </li>
            <li>
              <Link
                href="/profil"
                className="text-lg font-medium hover:text-purple-600"
              >
                Profil
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  )
}