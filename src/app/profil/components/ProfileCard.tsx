import EditableField from './EditableField'

export default function ProfileCard({ profil }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full border border-amber-200">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">Mekan Profili</h1>
      <h2 className="font-bold text-green-700 mb-6 text-center">Düzenlemek istediğiniz alana tıklayınız</h2>
      <div className="space-y-4">
        <EditableField label="Mekan Adı" value={profil.mekanAdi} />
        <EditableField label="Adres" value={profil.adres} />
        <EditableField label="E-posta" value={profil.email} />
        <EditableField label="Telefon" value={profil.telefon} />
        <EditableField label="İşletmeci" value={profil.isletmeci} />
      </div>
    </div>
  )
}