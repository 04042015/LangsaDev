# LangsaDev - Template Website Siap Pakai

Website profesional untuk menjual template website modern dan responsif. Dibangun dengan Next.js 15, TypeScript, dan Tailwind CSS.

## 🚀 Fitur Utama

### Halaman Publik (Company Profile)
- **Homepage**: Hero section dengan CTA dan featured templates
- **Templates**: Catalog template dengan filter kategori dan search
- **About**: Informasi perusahaan dan tim
- **Contact**: Form kontak dan integrasi WhatsApp

### Admin Panel (CMS Professional)
- **Dashboard**: Statistik dan analytics real-time
- **Template Management**: CRUD lengkap untuk template
- **Order Management**: Kelola pesanan dan komunikasi customer
- **Settings**: Konfigurasi sistem dan notifikasi
- **Authentication**: Login/logout yang aman

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Local Storage (dapat diganti dengan NextAuth)
- **State Management**: React Hooks
- **Responsive**: Mobile-first design

## 📁 Struktur Project

```
langsadev/
├── src/
│   ├── app/
│   │   ├── (public)/           # Halaman publik
│   │   │   ├── page.tsx        # Homepage
│   │   │   ├── templates/      # Catalog template
│   │   │   ├── about/          # Tentang kami
│   │   │   ├── contact/        # Kontak
│   │   │   └── layout.tsx      # Layout publik
│   │   ├── admin/              # Admin panel
│   │   │   ├── page.tsx        # Dashboard
│   │   │   ├── login/          # Login admin
│   │   │   ├── templates/      # Kelola template
│   │   │   ├── orders/         # Kelola pesanan
│   │   │   ├── settings/       # Pengaturan
│   │   │   └── layout.tsx      # Layout admin
│   │   ├── globals.css         # Global styles
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── public/             # Komponen halaman publik
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── TemplateCard.tsx
│   │   └── admin/              # Komponen admin
│   │       ├── AdminSidebar.tsx
│   │       ├── AdminHeader.tsx
│   │       └── TemplateForm.tsx
│   ├── lib/
│   │   ├── auth.ts             # Sistem autentikasi
│   │   ├── data.ts             # Mock data
│   │   └── utils.ts            # Utility functions
│   └── types/
│       └── index.ts            # TypeScript interfaces
├── public/                     # Static assets
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Gray Scale**: Tailwind Gray

### Components
- **Cards**: Rounded corners, soft shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Clean inputs dengan focus states
- **Navigation**: Sticky navbar dan collapsible sidebar
- **Modals**: Overlay dengan backdrop blur

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone <repository-url>
cd langsadev
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
npm start
```

## 🔐 Admin Access

**Demo Credentials:**
- Email: `admin@langsadev.com`
- Password: `admin123`

## 📱 Responsive Design

Website ini dirancang mobile-first dan responsive di semua device:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🔧 Kustomisasi

### Menambah Template Baru
1. Buka admin panel
2. Navigate ke "Kelola Template"
3. Klik "Tambah Template"
4. Isi form dan upload gambar

### Mengubah Kontak Info
1. Login sebagai admin
2. Buka "Pengaturan" > "Website"
3. Update informasi kontak

### Custom Styling
Edit file `src/app/globals.css` untuk custom CSS atau update komponen Tailwind.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload build folder ke Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔄 API Integration

Untuk production, ganti mock data dengan real API:

### Template API
```typescript
// src/lib/api/templates.ts
export const getTemplates = async () => {
  const response = await fetch('/api/templates');
  return response.json();
};

export const createTemplate = async (template: Template) => {
  const response = await fetch('/api/templates', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(template),
  });
  return response.json();
};
```

### Order API
```typescript
// src/lib/api/orders.ts
export const getOrders = async () => {
  const response = await fetch('/api/orders');
  return response.json();
};

export const updateOrderStatus = async (id: string, status: string) => {
  const response = await fetch(`/api/orders/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  return response.json();
};
```

## 🔒 Security

### Authentication
Saat ini menggunakan localStorage untuk demo. Untuk production:

```bash
npm install next-auth
```

```typescript
// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      // Your auth logic here
    })
  ]
})
```

### Environment Variables
```bash
# .env.local
NEXTAUTH_SECRET=your-secret-key
DATABASE_URL=your-database-url
UPLOADTHING_SECRET=your-upload-secret
```

## 📈 Performance

- **Lighthouse Score**: 90+ (dapat dioptimalkan lebih lanjut)
- **Bundle Size**: < 200KB gzipped
- **Image Optimization**: Next.js Image component
- **SEO**: Meta tags dan structured data

## 🧪 Testing

### Unit Tests
```bash
npm install -D jest @testing-library/react
npm run test
```

### E2E Tests
```bash
npm install -D playwright
npm run test:e2e
```

## 📝 TODO Future Enhancements

- [ ] Real database integration (PostgreSQL/MongoDB)
- [ ] File upload dengan cloud storage
- [ ] Email notifications
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Template preview dalam iframe
- [ ] Bulk operations untuk admin
- [ ] Advanced search dengan filters
- [ ] User reviews dan ratings

## 🐛 Troubleshooting

### Common Issues

**1. Build Errors**
```bash
# Clear cache
rm -rf .next
npm run build
```

**2. Styling Issues**
```bash
# Regenerate Tailwind
npx tailwindcss -i ./src/app/globals.css -o ./dist/output.css --watch
```

**3. TypeScript Errors**
```bash
# Type check
npx tsc --noEmit
```

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 📞 Support

- **Email**: support@langsadev.com
- **WhatsApp**: +62 812-3456-7890
- **Documentation**: [docs.langsadev.com](https://docs.langsadev.com)

---

**Made with ❤️ by LangsaDev Team**
