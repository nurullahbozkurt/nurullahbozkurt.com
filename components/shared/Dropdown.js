import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function MyDropDown({ clientTranslate, hobyyTranslate }) {
  return (
    <div className=" text-right">
      <Menu as="div" className="relative inline-block text-left z-10">
        <div>
          <Menu.Button className="inline-flex space-x-2 justify-center w-full px-5 py-2 bg-white text-sm font-medium text-gray-900 shadow rounded-full hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 shadow-specialB">
            Portfolio
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
          <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none shadow-specialB">
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/clientProjects"
                    className="block p-2 w-full text-left hover:bg-gray-50"
                  >
                    {clientTranslate}
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/hobbiesProjects"
                    className="block p-2 w-full text-left hover:bg-gray-50"
                  >
                    {hobyyTranslate}
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
