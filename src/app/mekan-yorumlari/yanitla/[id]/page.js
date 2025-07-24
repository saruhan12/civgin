'use client'
import { use } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { comments } from '../../../../mock/comments'

export default function YanitlaPage({ params }) {
  const { id } = use(params)
  const commentId = parseInt(id)
  const comment = comments.find(c => c.id === commentId)
  const router = useRouter()

  const [response, setResponse] = useState(comment?.response || '')

  if (!comment) {
    return <div className="p-6 text-red-600">Yorum bulunamadı.</div>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    comment.response = response
    alert('Yanıtınız kaydedildi. (Geçici olarak)')
    router.push('/mekan-yorumlari')
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#5AB57B] mb-4">Yoruma Yanıt Ver</h1>

      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm mb-4">
        <p className="font-semibold">{comment.name}:</p>
        <p className="text-gray-700 mt-1">{comment.comment}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700 font-medium">Yanıtınız:</span>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            rows={4}
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Mekan sahibi olarak yanıtınızı yazın..."
            required
          />
        </label>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
          >
            Geri Dön
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#5AB57B] text-white rounded hover:bg-[#489968]"
          >
            Yanıtı Kaydet
          </button>
        </div>
      </form>
    </div>
  )
}