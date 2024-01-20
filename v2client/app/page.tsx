import Navbar from "@/components/Navbar/Navbar"
import HeroText from "@/components/HeroText/HeroText";
import HeroCard from "@/components/HeroCard/HeroCard";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.33" />
        <title>Stream-Tunescape</title>
      </Head>
      <div className="min-h-screen">
        <HeroText />
        <Footer />
      </div>
    </>

  );
}
