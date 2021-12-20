import { useNurullah } from "../contexts/context";
import HobiesProjectCard from "../components/HobiesProjectCard";
import Header from "../components/shared/Header";
import HeaderMobile from "../components/shared/HeaderMobile";

import Footer from "../components/shared/Footer";
import useTranslation from "next-translate/useTranslation";

const client = () => {
  const { hobiesProjects } = useNurullah();
  const { t, lang } = useTranslation("common");
  const title = t("common:hobbyProjects");

  return (
    <div className=" min-h-full">
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="block sm:hidden">
        <HeaderMobile />
      </div>
      <div className="font-nunito sm:w-full h-20 sm:my-15 my-5 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        </div>
      </div>
      <div className=" w-11/12 sm:w-9/12 m-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {hobiesProjects.map((item, index) => (
            <HobiesProjectCard key={index} projects={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default client;
