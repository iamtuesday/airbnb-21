'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden laptop:block cursor-pointer" 
      src="/img/logo.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}

