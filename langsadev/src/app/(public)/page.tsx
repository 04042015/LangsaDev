import Link from 'next/link';
import { ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';
import TemplateCard from '@/components/public/TemplateCard';
import { mockTemplates } from '@/lib/data';

export default function HomePage() {
  const featuredTemplates = mockTemplates.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Template Website{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Siap Pakai
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Dapatkan website profesional untuk bisnis Anda dengan template modern, 
              responsive, dan mudah dikustomisasi. Hemat waktu dan biaya pengembangan!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/templates"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Lihat Template</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih LangsaDev?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan template berkualitas tinggi dengan fitur-fitur terdepan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Performa Cepat</h3>
              <p className="text-gray-600">
                Template dioptimasi untuk kecepatan loading dan SEO terbaik
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aman & Terpercaya</h3>
              <p className="text-gray-600">
                Kode bersih dan secure, mengikuti best practices development
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support 24/7</h3>
              <p className="text-gray-600">
                Tim support siap membantu customisasi dan troubleshooting
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Desain modern dan profesional dari designer berpengalaman
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Template Terpopuler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Koleksi template terbaik yang paling diminati customer kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/templates"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Lihat Semua Template</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Memulai Project Anda?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan website Anda dengan tim expert kami. 
            Dapatkan solusi terbaik untuk bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Hubungi Kami
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}