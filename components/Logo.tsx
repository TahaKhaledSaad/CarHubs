import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex justify-center items-center">
      <Image
        src="/logo.svg"
        alt="Car Hub Logo"
        width={118}
        height={18}
        className="object-contain"
      />
    </Link>
  );
}

export default Logo;
