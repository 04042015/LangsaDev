'use client';

import { useState, useEffect } from 'react';
import { 
  FileText, 
  MessageSquare, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  BarChart3,
  Activity
} from 'lucide-react';
import { mockStats, mockTemplates, mockOrders } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

export default function AdminDashboard() {
  const [stats, setStats] = useState(mockStats);
  const [recentOrders, setRecentOrders] = useState(mockOrders.slice(0, 5));

  const statsCards = [
    {
      title: 'Total Template',
      value: stats.totalTemplates,
      icon: FileText,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      change: '+12%',
      changeType: 'positive' as const
    },
    {
      title: 'Total Pesanan',
      value: stats.totalOrders,
      icon: MessageSquare,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      change: '+23%',
      changeType: 'positive' as const
    },
    {
      title: 'Pesanan Pending',
      value: stats.pendingOrders,
      icon: Activity,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      change: '-5%',
      changeType: 'negative' as const
    },
    {
      title: 'Pendapatan Bulan Ini',
      value: formatCurrency(stats.monthlyRevenue),
      icon: DollarSign,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      change: '+18%',
      changeType: 'positive' as const
    }
  ];

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

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Selamat datang di panel admin LangsaDev</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{card.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
                  <div className="flex items-center mt-2">
                    <span 
                      className={`text-xs font-medium ${
                        card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {card.change}
                    </span>
                    <span className="text-xs text-gray-500 ml-1">vs bulan lalu</span>
                  </div>
                </div>
                <div className={`w-12 h-12 ${card.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon className={card.textColor} size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Pesanan Terbaru</h3>
              <a 
                href="/admin/orders" 
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Lihat Semua
              </a>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div>
                        <p className="font-medium text-gray-900">{order.customerName}</p>
                        <p className="text-sm text-gray-600">{order.template.name}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(order.createdAt).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">
                      {formatCurrency(order.template.price)}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <a
                href="/admin/templates"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FileText className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Kelola Template</p>
                  <p className="text-sm text-gray-600">Tambah atau edit template</p>
                </div>
              </a>

              <a
                href="/admin/orders"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <MessageSquare className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Lihat Pesanan</p>
                  <p className="text-sm text-gray-600">Kelola pesanan customer</p>
                </div>
              </a>

              <a
                href="/admin/settings"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <BarChart3 className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Laporan</p>
                  <p className="text-sm text-gray-600">Analisis & statistik</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Templates */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Template Terpopuler</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockTemplates.slice(0, 3).map((template) => (
              <div key={template.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{template.name}</h4>
                  <span className="text-sm font-medium text-green-600">
                    {formatCurrency(template.price)}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{template.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {new Date(template.createdAt).toLocaleDateString('id-ID')}
                  </span>
                  <div className="flex items-center space-x-1">
                    <TrendingUp size={14} className="text-green-500" />
                    <span className="text-xs text-green-600 font-medium">+15%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
