import Link from "next/link";

export default function Elements() {
  return (
    <main className="w-full h-screen p-5 pt-16">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8">
        <h1 className="text-3xl">Wind Tails</h1>
        <span className="text-xl"> Elements</span>
        <div className="grid grid-cols-2 gap-4 text-center">
          <Link
            className="p-5 border hover:bg-gradient-to-l rounded-xl bg-gradient-to-r from-teal-500 to-fuchsia-500"
            href="/elements/button"
          >
            Button
          </Link>
          <Link
            className="p-5 border hover:bg-gradient-to-l rounded-xl bg-gradient-to-r from-teal-500 to-fuchsia-500"
            href="/elements/link"
          >
            Links
          </Link>
        </div>
      </div>
    </main>
  );
}
