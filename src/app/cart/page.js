"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {
  const pathname = usePathname();
  console.log(pathname);

  const searchParams = useSearchParams();
  console.log(searchParams.get("search"));

  return (
    <div>
      <h1>Cart component</h1>
    </div>
  );
}