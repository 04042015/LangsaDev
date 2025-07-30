'use client';

import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  size?: number;
  withText?: boolean;
};

export default function Logo({ size = 40, withText = false }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/assets/logo-ld-coral.png"
        alt="LangsaDev Logo"
        width={size}
        height={size}
        priority
      />
      {withText && (
        <span className="text-xl font-bold text-[#FF5E5B] tracking-wide">
          LangsaDev
        </span>
      )}
    </Link>
  );
}
