import { Users, Target, Award, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Tentang LangsaDev
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Membantu bisnis Indonesia tampil profesional di dunia digital dengan 
            template website berkualitas tinggi dan terjangkau.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Cerita Kami
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  LangsaDev didirikan pada tahun 2022 dengan misi sederhana: membuat website 
                  berkualitas profesional dapat dijangkau oleh semua kalangan bisnis di Indonesia. 
                  Kami percaya bahwa setiap bisnis, tidak peduli besar atau kecil, berhak memiliki 
                  presence digital yang menarik dan fungsional.
                </p>
                <p>
                  Tim kami terdiri dari developer dan designer berpengalaman yang telah mengerjakan 
                  puluhan project website untuk berbagai industri. Dengan pemahaman mendalam tentang 
                  tren desain modern dan teknologi web terdepan, kami menciptakan template yang tidak 
                  hanya indah dipandang, tetapi juga optimal dalam performa dan SEO.
                </p>
                <p>
                  Setiap template LangsaDev dirancang dengan standar kualitas tinggi, menggunakan 
                  teknologi modern seperti React, Next.js, dan Tailwind CSS untuk memastikan 
                  website Anda cepat, responsive, dan mudah di-maintain.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Target className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Misi</h3>
                    <p className="text-gray-600">Democratize professional web design</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Award className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visi</h3>
                    <p className="text-gray-600">Leading template provider in Southeast Asia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Heart className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Nilai</h3>
                    <p className="text-gray-600">Quality, Innovation, Customer Success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-xl text-gray-600">
              Kepercayaan customer adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Template Tersedia</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Customer Puas</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">2+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tim Kami
            </h2>
            <p className="text-xl text-gray-600">
              Profesional berpengalaman yang berdedikasi untuk kesuksesan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-white" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development Team</h3>
              <p className="text-gray-600">
                Expert developers dengan pengalaman 5+ tahun dalam web development 
                modern menggunakan React, Next.js, dan teknologi terdepan.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="text-white" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Team</h3>
              <p className="text-gray-600">
                Creative designers yang selalu mengikuti tren desain terbaru dan 
                memahami user experience untuk menciptakan interface yang menarik.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="text-white" size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Team</h3>
              <p className="text-gray-600">
                Customer support yang ramah dan responsif, siap membantu Anda 24/7 
                untuk memastikan kepuasan dan kesuksesan project Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Siap Bekerja Sama Dengan Kami?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Mari berdiskusi tentang kebutuhan website Anda dan bagaimana kami 
            dapat membantu mewujudkan visi digital bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Hubungi Kami
            </a>
            <a
              href="/templates"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Lihat Template
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}