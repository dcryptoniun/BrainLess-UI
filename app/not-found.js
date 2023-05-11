"use client";

import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen gap-8">
      <h1 className="text-red-500"> Not Found</h1>
      <div className="w-1 h-20 border divide-x"></div>
      <Link href="/" className="p-2 text-green-500 outline rounded-xl">
        Return Home
      </Link>
    </div>
  );
}
