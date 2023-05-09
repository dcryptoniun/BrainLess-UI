import Link from "next/link";
import Examples from "./components/Examples";

export default function Home() {
  return (
    <main className="w-full h-screen p-5 pt-16">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8">
        <div className="grid gap-4 text-center md:grid-cols-2">
          <div className="flex flex-col p-2">
            <h1 className="p-1 font-mono text-5xl font-extrabold text-center text-transparent md:text-start bg-gradient-to-r from-teal-400 to-fuchsia-600 bg-clip-text hover:bg-gradient-to-l ">
              Wind Tails
            </h1>
            <span className="p-1 text-sm text-start">
              Introducing WindTails, the ultimate destination for designers and
              developers looking for a comprehensive collection of Tailwind CSS
              components. With WindTails, you can access a wide range of
              pre-built components that are easy to use and fully customizable.
              Our website offers an open source and free collection of Tailwind
              CSS components, making it a go-to resource for building stunning
              web pages quickly and efficiently. Whether you are looking to
              build a blog, e-commerce site, or landing page, WindTails has got
              you covered with its extensive collection of beautifully designed
              blocks. So why wait? Join the WindTails community today and take
              your web development projects to the next level!
            </span>
            <div className="flex justify-center gap-4 p-2 md:justify-start">
              <Link
                className="p-5 border hover:bg-gradient-to-l rounded-xl bg-gradient-to-r from-teal-500 to-fuchsia-500"
                href="/playground"
              >
                Playground
              </Link>
              <Link
                className="p-5 border hover:bg-gradient-to-l rounded-xl bg-gradient-to-r from-teal-500 to-fuchsia-500"
                href="/elements"
              >
                Elements
              </Link>
            </div>
          </div>
          <Examples />
        </div>
      </div>
    </main>
  );
}
