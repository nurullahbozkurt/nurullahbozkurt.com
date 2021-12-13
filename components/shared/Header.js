import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import MyDropdown from "../shared/Dropdown";
import useTranslation from "next-translate/useTranslation";
import LanguageMenu from "./LanguageMenu";

const Header = () => {
  const { t, lang } = useTranslation("common");
  const home = t("common:home");
  const clientsProject = t("common:clientsProject");
  const hobyProject = t("common:hobbyProjects");

  return (
    <>
      <div className="w-full h-20 py-4 flex justify-between items-center border-b shadow-specialB sm:px-5">
        <div className="flex shadow-specialX flex-col sm:ml-5 bg-gray-800 text-white text-center sm:px-3 rounded-r sm:rounded cursor-pointer ">
          <Link href="/">
            <p className=" font-electrolize sm:text-xl text-md px-3 sm:px-2 ">
              Nurullah Bozkurt
            </p>
          </Link>
        </div>
        <div className="flex mx-5">
          <div className="px-2 cursor-pointer">
            <MyDropdown
              clientTranslate={clientsProject}
              hobyyTranslate={hobyProject}
            />
          </div>
          <div className="px-2 cursor-pointer">
            <LanguageMenu />
          </div>
          <a
            target="_blank"
            href="https://github.com/nurullahbozkurt"
            className="px-2 text-center flex items-center justify-center m-auto text-lg"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
