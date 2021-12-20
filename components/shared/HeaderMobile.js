import Link from "next/link";
import { MdLegendToggle } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import i18nConfig from "/i18n.json";
import { useRouter } from "next/router";

const HeaderMobile = () => {
  const { t, lang } = useTranslation("common");
  const router = useRouter();
  const id = router.asPath;
  const { defaultLocale } = i18nConfig;

  const clientsProject = t("common:clientsProject");
  const hobyProject = t("common:hobbyProjects");
  const [enabled, setEnabled] = useState(false);
  const [toggle, setToggle] = useState(true);

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

  const openClose = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="container  mx-auto shadow-specialB h-14 flex items-center justify-between">
        <div className=" w-full flex items-center justify-between z-20">
          <Link href="/">
            <p className="font-electrolize bg-gray-800 text-white px-3 py-2 rounded-r shadow-specialY">
              Nurullah Bozkurt
            </p>
          </Link>
          <div>
            <div
              onClick={openClose}
              className="text-2xl w-10 h-10 flex items-center justify-center rounded-full shadow-specialB border mx-5 "
            >
              {toggle ? <MdOutlineClose /> : <MdLegendToggle />}
            </div>
          </div>
        </div>
        <div
          className={`absolute ${
            toggle ? "hidden" : "block"
          } w-full h-full top-0 left-0 bottom-0 bg-white z-10`}
        >
          <div className="container mx-auto">
            <div className="w-full flex flex-col items-center justify-center space-y-10 mt-24 text-xl">
              <Link href="/clientProjects">{clientsProject}</Link>
              <Link href="/hobbiesProjects">{hobyProject}</Link>
              <div className="flex items-center justify-center border p-1 rounded-full shadow-specialB">
                <p className="py-1 px-2 text-base ">{!enabled ? "TR" : "EN"}</p>
                <Switch
                  checked={enabled}
                  onChange={newEnable}
                  className={`${
                    enabled ? "bg-gray-800" : "bg-gray-800"
                  } relative inline-flex items-center h-8 rounded-full w-14`}
                >
                  <span className="sr-only">Enable notifications</span>
                  <span
                    className={`${
                      enabled ? "translate-x-7" : "translate-x-3"
                    } inline-block w-4 h-4 transform bg-white rounded-full`}
                  />
                </Switch>
              </div>
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
    </>
  );
};
export default HeaderMobile;
