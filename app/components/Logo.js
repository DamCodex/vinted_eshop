"use client";

import Image from "next/image";
// import { useRouter } from "next/router";

export default function Logo() {
//   const router = useRouter();

  return (
    <Image
    //   onClick={() => router.push("/")}
      alt="Logo"
      width="45"
      height="45"
      src="/vinted_small.png"
      className="rounded-full cursor-pointer"
    />
  );
}
