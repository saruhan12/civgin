// src/components/Navbar.jsx
'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        {/* Brand with logo */}
        <Link href="/panel" className={styles.brand}>
          <Image
            src="/logo.png"
            alt="Çıvgın Logo"
            width={32}
            height={32}
            quality={100}
          />
          <span>Çıvgın</span>
        </Link>

        {/* Menu Items */}
        <ul className={styles.menu}>
          <li><Link href="/panel/mekan-bilgileri">Mekan Bilgileri</Link></li>
          <li><Link href="/panel/mekan-istatistikleri">Mekan İstatistikleri</Link></li>
          <li><Link href="/panel/mekan-yorumlari">Mekan Yorumları</Link></li>
          <li><Link href="/panel/profil">Profil</Link></li>
          {/* Logout Button */}
          <li>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className={`${styles.logoutBtn} text-red-500 hover:text-red-700`}
            >
              Çıkış Yap
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
