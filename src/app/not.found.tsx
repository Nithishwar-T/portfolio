import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 font-serif text-6xl italic leading-tight sm:text-8xl">Page not found.</h1>
      <p className="mt-6 max-w-md text-muted">That page doesn&apos;t exist or has moved.</p>
      <Link href="/" className="mt-10 w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg hover:opacity-90">
        Back to home
      </Link>
    </main>
  );
}