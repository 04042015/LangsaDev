'use client';

import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Filter, 
  MoreVertical,
  Image as ImageIcon 
} from 'lucide-react';
import Image from 'next/image';
import { mockTemplates } from '@/lib/data';
import { Template } from '@/types';
import { formatCurrency, formatDate } from '@/lib/utils';

export default function AdminTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>(mockTemplates);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null);

  const categories = [...new Set(templates.map(t => t.category))];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteTemplate = (id: string) => {
    setTemplates(prev => prev.filter(t => t.id !== id));
    setShowDeleteModal(null);
  };

  const getStatusColor = (template: Template) => {
    // Mock status based on creation date
    const daysSinceCreated = Math.floor((Date.now() - template.createdAt.getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceCreated <= 7) return 'bg-green-100 text-green-800';
    if (daysSinceCreated <= 30) return 'bg-blue-100 text-blue-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (template: Template) => {
    const daysSinceCreated = Math.floor((Date.now() - template.createdAt.getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceCreated <= 7) return 'Baru';
    if (daysSinceCreated <= 30) return 'Aktif';
    return 'Lama';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Template</h1>
          <p className="text-gray-600 mt-1">Tambah, edit, dan kelola template website</p>
        </div>
        <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Tambah Template</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari template..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="">Semua Kategori</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center md:justify-end">
            <span className="text-sm text-gray-600">
              Total: <span className="font-medium">{filteredTemplates.length}</span> template
            </span>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
            {/* Template Image */}
            <div className="relative h-48 bg-gray-200">
              {template.image ? (
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <ImageIcon className="text-gray-400" size={48} />
                </div>
              )}
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(template)}`}>
                  {getStatusText(template)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {template.category}
                  </span>
                </div>
                <div className="relative">
                  <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <MoreVertical size={16} className="text-gray-400" />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {template.description}
              </p>

              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-green-600">
                  {formatCurrency(template.price)}
                </span>
                <span className="text-xs text-gray-500">
                  {formatDate(template.createdAt)}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {template.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
                {template.technologies.length > 3 && (
                  <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    +{template.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                {template.previewUrl && (
                  <a
                    href={template.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 text-gray-700 text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-1"
                  >
                    <Eye size={14} />
                    <span>Preview</span>
                  </a>
                )}
                <button className="flex-1 bg-blue-100 text-blue-700 text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors flex items-center justify-center space-x-1">
                  <Edit size={14} />
                  <span>Edit</span>
                </button>
                <button 
                  onClick={() => setShowDeleteModal(template.id)}
                  className="flex-1 bg-red-100 text-red-700 text-center py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors flex items-center justify-center space-x-1"
                >
                  <Trash2 size={14} />
                  <span>Hapus</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <ImageIcon size={64} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Tidak ada template ditemukan
          </h3>
          <p className="text-gray-600 mb-4">
            {searchTerm || selectedCategory 
              ? 'Coba ubah filter pencarian Anda'
              : 'Mulai dengan menambahkan template pertama Anda'
            }
          </p>
          {!searchTerm && !selectedCategory && (
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto">
              <Plus size={20} />
              <span>Tambah Template</span>
            </button>
          )}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Konfirmasi Hapus
            </h3>
            <p className="text-gray-600 mb-6">
              Apakah Anda yakin ingin menghapus template ini? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={() => handleDeleteTemplate(showDeleteModal)}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}