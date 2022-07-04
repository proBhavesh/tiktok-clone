import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TikTik</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <h1 className="text-3xl font-bold underline">Hello World</h1>
    </div>
  );
};

export default Home;
