'use client'

import ProfileCard from './components/ProfileCard'

export default function ProfilPage() {
  const profilData = {
    mekanAdi: 'Çıvgın Kafe',
    adres: 'Moda Caddesi No:17, Kadıköy, İstanbul',
    email: 'iletisim@civginkafe.com',
    telefon: '+90 212 123 45 67',
    isletmeci: 'Onur Alp Gündüz',
  }

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <ProfileCard profil={profilData} />
    </div>
  )
}