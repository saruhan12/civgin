// src/components/Navbar.jsx
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        {/* Brand: logo + text */}
        <Link href="/" className={styles.brand}>
          <Image
            src="/logo.png"
            alt="Çıvgın Logo"
            width={32}
            height={32}
            priority
          />
          <span>Çıvgın</span>
        </Link>

        <ul className={styles.menu}>
          <li><Link href="/mekan-bilgileri">Mekan Bilgileri</Link></li>
          <li><Link href="/mekan-istatistikleri">Mekan İstatistikleri</Link></li>
          <li><Link href="/mekan-yorumlari">Mekan Yorumları</Link></li>
          <li><Link href="/profil">Profil</Link></li>
        </ul>
      </nav>
    </header>
  )
}
