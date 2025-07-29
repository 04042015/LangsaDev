'use client';

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  Mail, 
  Phone, 
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import { mockOrders } from '@/lib/data';
import { Order } from '@/types';
import { formatCurrency, formatDateTime } from '@/lib/utils';

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.template.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId 
        ? { ...order, status: newStatus, updatedAt: new Date() }
        : order
    ));
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    
    return statusConfig[status as keyof typeof statusConfig] || 'bg-gray-100 text-gray-800';
  };

  const getStatusText = (status: string) => {
    const statusText = {
      pending: 'Pending',
      'in-progress': 'Proses',
      completed: 'Selesai',
      cancelled: 'Dibatalkan'
    };
    
    return statusText[status as keyof typeof statusText] || status;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="text-yellow-600" size={16} />;
      case 'in-progress':
        return <AlertCircle className="text-blue-600" size={16} />;
      case 'completed':
        return <CheckCircle className="text-green-600" size={16} />;
      case 'cancelled':
        return <XCircle className="text-red-600" size={16} />;
      default:
        return <Clock className="text-gray-600" size={16} />;
    }
  };

  const stats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    inProgress: orders.filter(o => o.status === 'in-progress').length,
    completed: orders.filter(o => o.status === 'completed').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Kelola Pesanan</h1>
        <p className="text-gray-600 mt-1">Monitor dan kelola pesanan dari customer</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Pesanan</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="text-blue-600" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Clock className="text-yellow-600" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Proses</p>
              <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-blue-600" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Selesai</p>
              <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Cari pesanan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="">Semua Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">Proses</option>
              <option value="completed">Selesai</option>
              <option value="cancelled">Dibatalkan</option>
            </select>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-center md:justify-end">
            <span className="text-sm text-gray-600">
              Menampilkan: <span className="font-medium">{filteredOrders.length}</span> pesanan
            </span>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Template
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Harga
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tanggal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.customerName}</div>
                      <div className="text-sm text-gray-500">{order.customerEmail}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{order.template.name}</div>
                    <div className="text-sm text-gray-500">{order.template.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-green-600">
                      {formatCurrency(order.template.price)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(order.status)}`}>
                        {getStatusText(order.status)}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDateTime(order.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="text-blue-600 hover:text-blue-900 flex items-center space-x-1"
                      >
                        <Eye size={14} />
                        <span>Detail</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Detail Pesanan #{selectedOrder.id}
                </h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XCircle size={24} />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Customer Info */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Informasi Customer</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-600">Nama:</span>
                    <span className="text-sm text-gray-900">{selectedOrder.customerName}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-900">{selectedOrder.customerEmail}</span>
                  </div>
                  {selectedOrder.customerPhone && (
                    <div className="flex items-center space-x-2">
                      <Phone size={14} className="text-gray-400" />
                      <span className="text-sm text-gray-900">{selectedOrder.customerPhone}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Template Info */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Template</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{selectedOrder.template.name}</span>
                    <span className="text-sm font-medium text-green-600">
                      {formatCurrency(selectedOrder.template.price)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{selectedOrder.template.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                    {selectedOrder.template.category}
                  </span>
                </div>
              </div>

              {/* Message */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Pesan Customer</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-900">{selectedOrder.message}</p>
                </div>
              </div>

              {/* Status & Actions */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Status & Aksi</h4>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(selectedOrder.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusBadge(selectedOrder.status)}`}>
                      {getStatusText(selectedOrder.status)}
                    </span>
                  </div>
                  <select
                    value={selectedOrder.status}
                    onChange={(e) => {
                      updateOrderStatus(selectedOrder.id, e.target.value as Order['status']);
                      setSelectedOrder(prev => prev ? { ...prev, status: e.target.value as Order['status'] } : null);
                    }}
                    className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="in-progress">Proses</option>
                    <option value="completed">Selesai</option>
                    <option value="cancelled">Dibatalkan</option>
                  </select>
                </div>
              </div>

              {/* Timestamps */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">Riwayat</h4>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-600">Dibuat:</span>
                    <span className="text-sm text-gray-900">{formatDateTime(selectedOrder.createdAt)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={14} className="text-gray-400" />
                    <span className="text-sm text-gray-600">Diupdate:</span>
                    <span className="text-sm text-gray-900">{formatDateTime(selectedOrder.updatedAt)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex space-x-3">
                <a
                  href={`mailto:${selectedOrder.customerEmail}?subject=Re: Pesanan Template ${selectedOrder.template.name}`}
                  className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Email Customer
                </a>
                {selectedOrder.customerPhone && (
                  <a
                    href={`https://wa.me/${selectedOrder.customerPhone.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Mail size={64} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Tidak ada pesanan ditemukan
          </h3>
          <p className="text-gray-600">
            {searchTerm || statusFilter 
              ? 'Coba ubah filter pencarian Anda'
              : 'Belum ada pesanan masuk'
            }
          </p>
        </div>
      )}
    </div>
  );
}