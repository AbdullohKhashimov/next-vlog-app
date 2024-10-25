"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleNavigate() {
    router.push("products");
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to NextJS</h1>
      <Link href={"/products"}> Navigate to products page</Link>
      <Link href={"/account"}> Navigate to accounts page</Link>

      <h2 className="font-bold mt-3 text-lg">
        Alternative way of navigating using use Router
      </h2>

      <button onClick={handleNavigate}>
        Navigate to products page using use router
      </button>
    </div>
  );
}

// bracket [] will allow us to make up dynamic routing.
// [...] will help to recieve as more params as possible and route to more nested component  (localhost://3000/product/2383/widjiwej)
