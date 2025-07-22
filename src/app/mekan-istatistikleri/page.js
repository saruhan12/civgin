'use client'
import Sidebar from '../../components/Sidebar'

export default function MekanIstatistikleri() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">
            Mekan İstatistikleri
          </h1>
          {/* İstatistik içeriği buraya */}
        </div>
      </main>
    </div>
  )
}