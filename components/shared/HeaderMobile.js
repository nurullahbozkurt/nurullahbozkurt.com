import Link from "next/link";
import { MdLegendToggle } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import i18nConfig from "/i18n.json";
import { useRouter } from "next/router";
import MultiLangToggle from "../shared/MultiLangToggle";
import { useNurullah } from "../../contexts/context";

const HeaderMobile = () => {
  const { darkMode, toggle, openClose, dark, setToggle } = useNurullah();

  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const id = router.asPath;
  const { defaultLocale } = i18nConfig;

  const clientsProject = t("common:clientsProject");
  const hobyProject = t("common:hobbyProjects");
  const [enabled, setEnabled] = useState(false);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const newEnable = () => {
    setEnabled(!enabled);
    changeLang();
  };

  const changeLang = () => {
    lang === defaultLocale && router.push(`/en${id}`);
    lang !== defaultLocale &&
      router.push(`/${id}`, null, { locale: defaultLocale });
  };

  const closeToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
    console.log("clicklendi");
  };

  return (
    <>
      <div className="container dark:text-white mx-auto h-14 flex items-center justify-between ">
        <div className=" w-full h-full flex items-center justify-between z-20 shadow-specialB dark:bg-transparent dark:border-b ">
          <Link href="/">
            <p
              onClick={() => setToggle(true)}
              className="font-electrolize bg-gray-800 dark:bg-white text-white dark:text-gray-800 px-3 py-2 rounded-r shadow-specialY"
            >
              Nurullah Bozkurt
            </p>
          </Link>

          <div className="flex items-center justify-center">
            <div
              onClick={darkMode}
              className="flex items-center justify-center text-2xl w-10 h-10 rounded-full border"
            >
              {dark ? <MdOutlineDarkMode /> : <MdDarkMode />}
            </div>
            <div
              onClick={openClose}
              className="text-2xl w-10 h-10 flex items-center justify-center rounded-full shadow-specialB border mx-5  "
            >
              {toggle ? <MdLegendToggle /> : <MdOutlineClose />}
            </div>
          </div>
        </div>
        <div
          className={`dark:bg-bgGr dark:bg-contain  absolute ${
            toggle ? "hidden" : "block"
          } w-full h-full top-0 left-0 bottom-0  bg-white  z-10`}
        >
          <div className="container mx-auto">
            <div className="w-full flex flex-col items-center justify-center space-y-10 mt-40 text-xl">
              <Link href="/clientProjects">
                <p onClick={closeToggle}>{clientsProject}</p>
              </Link>
              <Link href="/hobbiesProjects">
                <p onClick={closeToggle}>{hobyProject}</p>
              </Link>
              <div className="flex items-center justify-center pt-10">
                <MultiLangToggle onChange={newEnable} enabled={enabled} />
                <a
                  target="_blank"
                  href="https://github.com/nurullahbozkurt"
                  className="px-2 text-center flex items-center justify-center m-auto text-2xl"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HeaderMobile;
