import { useNurullah } from "../contexts/context";
import ClientProjectCard from "../components/ClientProjectCard";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import useTranslation from "next-translate/useTranslation";

const client = () => {
  const { clientProjects } = useNurullah();
  const { t, lang } = useTranslation("common");
  const title = t("common:clientsProject");

  return (
    <div className=" min-h-full">
      <Header />
      <div className="font-nunito sm:w-full h-20 sm:my-15 my-5 flex justify-center items-center">
        <div className="m-auto text-center space-y-2">
          <h1 className="flex justify-center items-center text-2xl sm:text-3xl text-center font-bold">
            {title}
          </h1>
        </div>
      </div>
      <div className=" w-11/12 sm:w-9/12 m-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {clientProjects.map((item, index) => (
            <ClientProjectCard key={index} projects={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default client;
