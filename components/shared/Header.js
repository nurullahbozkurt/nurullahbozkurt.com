import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import MyDropdown from "../shared/Dropdown";

const Header = () => {
  return (
    <>
      <div className="w-full h-20 py-4 flex justify-between items-center border-b shadow-specialB sm:px-5">
        <div className="flex shadow-specialX flex-col ml-5 bg-gray-800 text-white text-center sm:px-3 rounded cursor-pointer ">
          <Link href="/" passHref>
            <p className=" font-electrolize sm:text-xl text-md px-2">
              Nurullah Bozkurt
            </p>
          </Link>
        </div>
        <div className="flex mx-5">
          <div className="px-2 m-auto cursor-pointer">
            <Link href="/" passHref>
              <p className="text-gray-900  font-semibold ">Home</p>
            </Link>
          </div>
          <div className="px-2 cursor-pointer">
            <MyDropdown />
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
