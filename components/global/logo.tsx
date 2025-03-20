import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
const Logo = ({className} : {className?: string}) => {
  return (
    <Link href="/" className={cn(className)}>
      <Image src="/logo-dark.svg" alt="logo" width={100} height={100} className="hidden dark:block" />
      <Image src="/logo-light.svg" alt="logo" width={100} height={100} className="block dark:hidden" />
    </Link>
  );
};

export default Logo;
