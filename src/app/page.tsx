import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>First next app</title>
        <meta name="keywords" content="programming" />
      </Head>
      <h1>Welcome to next</h1>
    </div>
  );
}
