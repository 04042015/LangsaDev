import { Admin } from '@/types';

// Mock admin data
const mockAdmin: Admin = {
  id: '1',
  email: 'admin@langsadev.com',
  name: 'Admin LangsaDev',
};

export const authenticateAdmin = async (email: string, password: string): Promise<Admin | null> => {
  // Simple mock authentication
  if (email === 'admin@langsadev.com' && password === 'admin123') {
    return mockAdmin;
  }
  return null;
};

export const getStoredAdmin = (): Admin | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem('admin');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }
  return null;
};

export const storeAdmin = (admin: Admin): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const removeAdmin = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('admin');
};