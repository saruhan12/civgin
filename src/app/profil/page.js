'use client'
import Sidebar from '../../components/Sidebar'

export default function Profil() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="content">
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">
            Profil
          </h1>
          {/* Profil içeriği buraya */}
        </div>
      </main>
    </div>
  )
}