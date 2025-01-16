export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">
        안녕하세요! 👋
      </h1>
      <p className="text-xl text-gray-600">
        제가 만든 첫 웹사이트입니다
      </p>
      
      <div className="mt-8 grid gap-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          시작하기
        </button>
      </div>
    </main>
  )
}