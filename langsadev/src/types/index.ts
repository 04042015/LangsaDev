export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  previewUrl?: string;
  features: string[];
  technologies: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  templateId: string;
  template: Template;
  message: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface Admin {
  id: string;
  email: string;
  name: string;
}

export interface DashboardStats {
  totalTemplates: number;
  totalOrders: number;
  pendingOrders: number;
  monthlyRevenue: number;
}