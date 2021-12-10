import Header from "../components/shared/Header";
import Head from "next/dist/shared/lib/head";
import Footer from "../components/shared/Footer";
import Card from "../components/Card";

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className=" w-9/12 m-auto flex-1">
          <div className="grid sm:grid-cols-3  mt-10">
            <Card
              image={"/img/tv.png"}
              link={"https://televizyononarim.com"}
              paragraph={
                "Seo compatible React project we made using Nextjs and Tailwind library"
              }
            />
            <Card
              image={"/img/devnoty.png"}
              link={"https://devnoty.com"}
              paragraph={
                "The web and mobile software company we are affiliated with"
              }
            />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default portfolio;
