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
          <Image
            width="30"
            height="60"
            src="/../public/img/devnotyLogo.svg"
          ></Image>
        </a>
      </div>
    </>
  );
};

export default Footer;
