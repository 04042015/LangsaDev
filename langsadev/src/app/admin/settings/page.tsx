'use client';

import { useState } from 'react';
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database, 
  Download,
  Upload,
  BarChart3,
  Mail,
  Globe
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [settings, setSettings] = useState({
    profile: {
      name: 'Admin LangsaDev',
      email: 'admin@langsadev.com',
      phone: '+62 812-3456-7890'
    },
    notifications: {
      emailOnNewOrder: true,
      emailOnOrderUpdate: false,
      dailyReport: true,
      weeklyReport: true
    },
    site: {
      siteName: 'LangsaDev',
      siteDescription: 'Template Website Siap Pakai',
      contactEmail: 'info@langsadev.com',
      contactPhone: '+62 812-3456-7890',
      address: 'Jakarta, Indonesia'
    }
  });

  const tabs = [
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'notifications', label: 'Notifikasi', icon: Bell },
    { id: 'site', label: 'Website', icon: Globe },
    { id: 'security', label: 'Keamanan', icon: Shield },
    { id: 'data', label: 'Data', icon: Database },
    { id: 'reports', label: 'Laporan', icon: BarChart3 }
  ];

  const handleSave = () => {
    // Simulate save operation
    alert('Pengaturan berhasil disimpan!');
  };

  const handleExportData = () => {
    // Simulate data export
    alert('Data berhasil diekspor!');
  };

  const handleImportData = () => {
    // Simulate data import
    alert('Fitur import akan segera tersedia!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pengaturan</h1>
        <p className="text-gray-600 mt-1">Kelola konfigurasi sistem dan preferensi admin</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Profil Admin</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        value={settings.profile.name}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          profile: { ...prev.profile, name: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={settings.profile.email}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          profile: { ...prev.profile, email: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      value={settings.profile.phone}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        profile: { ...prev.profile, phone: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Notifikasi</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Email saat pesanan baru</h4>
                      <p className="text-sm text-gray-600">Dapatkan notifikasi email ketika ada pesanan baru</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.emailOnNewOrder}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, emailOnNewOrder: e.target.checked }
                        }))}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Email saat status pesanan berubah</h4>
                      <p className="text-sm text-gray-600">Notifikasi ketika status pesanan diupdate</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.emailOnOrderUpdate}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, emailOnOrderUpdate: e.target.checked }
                        }))}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Laporan harian</h4>
                      <p className="text-sm text-gray-600">Terima ringkasan aktivitas harian</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.dailyReport}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, dailyReport: e.target.checked }
                        }))}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Laporan mingguan</h4>
                      <p className="text-sm text-gray-600">Terima analisis performa mingguan</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.weeklyReport}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          notifications: { ...prev.notifications, weeklyReport: e.target.checked }
                        }))}
                        className="sr-only peer"
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Site Settings Tab */}
            {activeTab === 'site' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Pengaturan Website</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Website
                      </label>
                      <input
                        type="text"
                        value={settings.site.siteName}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          site: { ...prev.site, siteName: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Kontak
                      </label>
                      <input
                        type="email"
                        value={settings.site.contactEmail}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          site: { ...prev.site, contactEmail: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deskripsi Website
                    </label>
                    <textarea
                      rows={3}
                      value={settings.site.siteDescription}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        site: { ...prev.site, siteDescription: e.target.value }
                      }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telepon Kontak
                      </label>
                      <input
                        type="tel"
                        value={settings.site.contactPhone}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          site: { ...prev.site, contactPhone: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat
                      </label>
                      <input
                        type="text"
                        value={settings.site.address}
                        onChange={(e) => setSettings(prev => ({
                          ...prev,
                          site: { ...prev.site, address: e.target.value }
                        }))}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Keamanan</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="text-yellow-600" size={20} />
                      <h4 className="font-medium text-yellow-800">Ganti Password</h4>
                    </div>
                    <p className="text-sm text-yellow-700 mt-1">
                      Disarankan untuk mengganti password secara berkala
                    </p>
                    <button className="mt-3 bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors">
                      Ganti Password
                    </button>
                  </div>

                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Shield className="text-blue-600" size={20} />
                      <h4 className="font-medium text-blue-800">Aktivitas Login</h4>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      Monitor aktivitas login dan sesi aktif
                    </p>
                    <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Lihat Log
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Data Tab */}
            {activeTab === 'data' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Pengelolaan Data</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <Download className="text-green-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Export Data</h4>
                          <p className="text-sm text-gray-600">Unduh backup data sistem</p>
                        </div>
                      </div>
                      <button
                        onClick={handleExportData}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                      >
                        Export Data
                      </button>
                    </div>

                    <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Upload className="text-blue-600" size={20} />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Import Data</h4>
                          <p className="text-sm text-gray-600">Restore data dari backup</p>
                        </div>
                      </div>
                      <button
                        onClick={handleImportData}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                      >
                        Import Data
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Database className="text-red-600" size={20} />
                      <h4 className="font-medium text-red-800">Zona Bahaya</h4>
                    </div>
                    <p className="text-sm text-red-700 mt-1">
                      Aksi-aksi berikut dapat menghapus data secara permanen
                    </p>
                    <div className="mt-3 space-x-2">
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                        Reset Database
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                        Clear Cache
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Laporan & Analisis</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Laporan Penjualan</h4>
                      <p className="text-sm text-gray-600 mb-3">Generate laporan penjualan bulanan/tahunan</p>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                        Generate Laporan
                      </button>
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Analisis Template</h4>
                      <p className="text-sm text-gray-600 mb-3">Lihat performa template yang paling laris</p>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                        Lihat Analisis
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Ringkasan Bulan Ini</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">15</p>
                        <p className="text-sm text-gray-600">Template Terjual</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">Rp 2.4M</p>
                        <p className="text-sm text-gray-600">Total Revenue</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">8</p>
                        <p className="text-sm text-gray-600">Customer Baru</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-600">95%</p>
                        <p className="text-sm text-gray-600">Satisfaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg">
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Simpan Perubahan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}