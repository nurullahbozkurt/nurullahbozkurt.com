import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "/i18n.json";
import { useRouter } from "next/router";

export default function LanguageMenu() {
  const router = useRouter();
  const id = router.asPath;
  const { t, lang } = useTranslation("");
  const { defaultLocale } = i18nConfig;

  const changeLang = () => {
    lang === defaultLocale && router.push(`/en${id}`);
    lang !== defaultLocale &&
      router.push(`/${id}`, null, { locale: defaultLocale });
  };

  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex space-x-2 justify-center w-full px-5 py-2 bg-white text-sm font-medium text-gray-900 shadow rounded-full hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-specialB">
            {lang === "tr" ? "TR" : "EN"}
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 w-10 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-specialB hover:rounded-md">
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={changeLang}
                    className="block p-2 w-full text-left text-gray-900 hover:bg-gray-100 hover:rounded-md"
                  >
                    {lang === "tr" ? "EN" : ""}
                    {lang === "en" ? "TR" : ""}
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
