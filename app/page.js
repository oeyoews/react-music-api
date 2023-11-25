import Link from 'next/link';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button>demo</button>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/api/banner"> Banners</Link>
      </div>
    </main>
  );
}
