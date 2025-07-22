'use client'
import Sidebar from '../../components/Sidebar'

export default function MekanYorumlari() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">
            Mekan Yorumları
          </h1>
          {/* Kullanıcı yorumları buraya */}
        </div>
      </main>
    </div>
  )
}