import { Suspense } from 'react';
import ContactClient from './ContactClient';

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-8">Memuat...</div>}>
      <ContactClient />
    </Suspense>
  );
}
