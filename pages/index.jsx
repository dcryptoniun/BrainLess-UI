import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>BrainLess UI</title>
        <meta
          name="description"
          content="Open Source Prebuild Tailwind CSS Components"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}
