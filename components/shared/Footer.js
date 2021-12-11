import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className=" font-electrolize w-full h-10 border-t shadow flex  justify-center items-center ">
        <div className="cursor-pointer px-2 ">
          <Link href="/" passHref>
            <p className="">Nurullah Bozkurt</p>
          </Link>
        </div>
        <a target="_blank" href="https://devnoty.com">
          <img
            className=" w-7 h-8"
            src="https://d33wubrfki0l68.cloudfront.net/06745f2f70277023b0910a311bd9735572094fc5/49259/assets/images/logo.svg"
          ></img>
        </a>
      </div>
    </>
  );
};

export default Footer;
