'use client';

import Link from 'next/link';
import { ArrowRight, Star, Users, Zap, Shield } from 'lucide-react';
import TemplateCard from '@/components/public/TemplateCard';
import { mockTemplates } from '@/lib/data';

export default function HomePage() {
  const featuredTemplates = mockTemplates.slice(0, 3);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 via-purple-700 to-fuchsia-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Template Website{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Siap Pakai
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Dapatkan website profesional untuk bisnismu dengan tampilan modern,
              responsif, dan siap pakai — tanpa repot!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/templates"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-md"
              >
                <span>Lihat Template</span>
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-colors"
              >
                Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-indigo-700">LangsaDev</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan template berkualitas tinggi dengan fitur unggulan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureBox
              icon={<Zap size={32} className="text-indigo-600" />}
              bg="bg-indigo-100"
              title="Performa Cepat"
              desc="Template kami dioptimalkan untuk loading kilat & SEO maksimal."
            />
            <FeatureBox
              icon={<Shield size={32} className="text-green-600" />}
              bg="bg-green-100"
              title="Aman & Terpercaya"
              desc="Kode bersih & aman dengan standar best-practice developer."
            />
            <FeatureBox
              icon={<Users size={32} className="text-pink-600" />}
              bg="bg-pink-100"
              title="Support 24/7"
              desc="Tim kami siap bantu kapan saja dengan ramah & responsif."
            />
            <FeatureBox
              icon={<Star size={32} className="text-yellow-600" />}
              bg="bg-yellow-100"
              title="Premium Quality"
              desc="Desain elegan dari tim profesional berpengalaman."
            />
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Template Terpopuler
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihan paling banyak digunakan dan disukai oleh pengguna
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
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Lihat Semua Template</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Memulai Project Anda?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhanmu & temukan solusi terbaik bersama kami!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-600 transition-colors"
            >
              Hubungi Kami
            </Link>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Komponen untuk fitur kotak
function FeatureBox({
  icon,
  bg,
  title,
  desc,
}: {
  icon: React.ReactNode;
  bg: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className={`w-16 h-16 ${bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
                }
