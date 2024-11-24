import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 font-[family-name:var(--font-geist-mono)]">
      <h1 className="font-[family-name:var(--font-geist-sans)] text-6xl font-bold">
        nuno fernandes.
      </h1>
      <p className="text-zinc-300">
        software engineering @ university of minho
      </p>
      <a
        href="https://github.com/your-github-username"
        className="mt-4 flex items-center text-blue-600 hover:underline"
      >
        github <ArrowUpRightIcon className="ml-1 size-4" />
      </a>
    </main>
  );
}
