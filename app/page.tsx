import { Search } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* 로고 */}
      <h1 className="text-5xl font-bold mb-8 text-blue-500">
        SearchHub
      </h1>
      
      {/* 검색 폼 */}
      <div className="w-full max-w-2xl">
        <div className="relative">
          <input 
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">
            <Search size={20} />
          </button>
        </div>
        
        {/* 바로가기 버튼들 */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            검색하기
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            인기 검색어
          </button>
        </div>
      </div>
    </main>
  )
}