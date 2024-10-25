import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to NextJS</h1>
    </div>
  );
}

// bracket [] will allow us to make up dynamic routing.
// [...] will help to recieve as more params as possible and route to more nested component  (localhost://3000/product/2383/widjiwej)
