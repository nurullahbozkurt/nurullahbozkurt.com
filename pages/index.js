import Head from "next/head";
import Header from "../components/shared/Header";
import ClientProjectCard from "../components/ClientProjectCard";
import HobiesProjectCard from "../components/HobiesProjectCard";
import Footer from "../components/shared/Footer";
import { useNurullah } from "../contexts/context";
import useTranslation from "next-translate/useTranslation";
import HeaderMobile from "../components/shared/HeaderMobile";

export default function Home() {
  const { clientProjects, hobiesProjects } = useNurullah();
  const { t, lang } = useTranslation("home");

  const title = t("home:title");
  const subTitle = t("home:subTitle");
  const subTitleStrongTR = t("home:subTitleStrongTR");
  const subTitleStrongEN = t("home:subTitleStrongEN");

  return (
    <div className=" min-h-full">
      <Head>
        <title>Nurullah Bozkurt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="block sm:hidden">
        <HeaderMobile />
      </div>

      <div className="font-nunito sm:w-full h-20 sm:my-20 my-10 ">
        <div className="flex flex-col items-center justify-center text-center px-1 space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          <div>
            <h2 className="text-lg sm:text-2xl text-center ">
              <strong>{subTitleStrongTR}</strong> {subTitle}
              <strong>{subTitleStrongEN}</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className=" w-11/12 sm:w-9/12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {clientProjects.map((item, index) => (
            <ClientProjectCard key={index} projects={item} />
          ))}

          {hobiesProjects.map((item, index) => (
            <HobiesProjectCard key={index} projects={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
