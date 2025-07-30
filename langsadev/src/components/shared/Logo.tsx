'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type LogoProps = {
  size?: number;
  withText?: boolean;
  className?: string;
};

export default function Logo({ size = 40, withText = false, className = '' }: LogoProps) {
  return (
    <Link href="/" className={clsx('flex items-center space-x-2', className)}>
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
