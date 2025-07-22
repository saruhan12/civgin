'use client'
import Sidebar from '../../../components/Sidebar'
import Link from 'next/link'

export default function SaatlerDetails() {
  const saatler = {
    Pazartesi: '09:00 – 22:00',
    Salı:       '09:00 – 22:00',
    Çarşamba:   '09:00 – 22:00',
    Perşembe:   '09:00 – 22:00',
    Cuma:       '09:00 – 23:00',
    Cumartesi:  '10:00 – 23:00',
    Pazar:      '10:00 – 21:00',
  }

  return (
    <div className="app-container">
      <Sidebar />

      <main className="content flex flex-col items-center p-6">
        <div className="bg-violet-50 rounded-lg shadow-md p-6 w-full max-w-md">
          <Link href="/mekan-bilgileri" className="text-violet-600 hover:underline">
            &larr; Geri
          </Link>

          <h1 className="text-2xl font-bold text-violet-700 mt-4 mb-4">
            Çalışma Saatleri
          </h1>

          <ul className="list-disc ml-5 space-y-1">
            {Object.entries(saatler).map(([gün, saat]) => (
              <li key={gün}>
                <strong>{gün}:</strong> {saat}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}