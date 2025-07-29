'use client'
import Sidebar from '../../../components/Sidebar'
import CommentList from './Comment-List/CommentList'
export default function MekanYorumlari() {
  return (
    <div className="app-container">
      <main className="content bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <CommentList />
        </div>
      </main>
    </div>
  )
}