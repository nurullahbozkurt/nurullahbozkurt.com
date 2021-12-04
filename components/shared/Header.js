import Link from "next/link";

import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 flex justify-between items-center border-b shadow px-5">
        <div
          style={{ fontFamily: "Electrolize" }}
          className="flex flex-col ml-5 bg-gray-800 text-white text-center sm:px-3 py-1 shadow rounded cursor-pointer "
        >
          <Link href="/" passHref>
            <p className=" sm:text-xl text-md px-2">Nurullah Bozkurt</p>
          </Link>
        </div>
        <div className="flex mx-5">
          <div className="px-2 cursor-pointer">
            <Link href="/" passHref>
              <p className="text-gray-900  font-semibold ">Home</p>
            </Link>
          </div>
          <div className="px-2 cursor-pointer">
            <Link href="/portfolio" passHref>
              <p className="text-gray-900 font-semibold ">Portfolio</p>
            </Link>
          </div>
          <a
            target="_blank"
            href="https://github.com/nurullahbozkurt"
            passHref
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
