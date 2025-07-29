import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Selamat Datang di <span className="text-yellow-300">LangsaDev</span>
      </h1>
      <p className="text-lg sm:text-xl max-w-2xl mb-8">
        Platform jual beli template website siap pakai ✨ Cepat, responsif, dan cocok untuk bisnis Anda.
      </p>
      <Link
        href="/templates"
        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-200 transition"
      >
        Lihat Template Sekarang
      </Link>

      <div className="mt-16 text-sm opacity-70">
        Dibangun dengan Next.js + Tailwind CSS ❤️
      </div>
    </div>
  );
}
