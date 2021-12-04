import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="w-full h-20 border-t shadow flex  justify-center items-center ">
        <div
          style={{ fontFamily: "Electrolize" }}
          className="cursor-pointer px-2 "
        >
          <Link href="/" passHref>
            <p className=" text-xl">Nurullah Bozkurt</p>
          </Link>
        </div>
        <a target="_blank" href="https://devnoty.com">
          <Image
            width="40"
            height="70"
            src="/../public/img/devnotyLogo.svg"
          ></Image>
        </a>

        {/* <a
          target="_blank"
          href="https://github.com/nurullahbozkurt"
          passHref
          className="px-2"
        >
          <FaGithub />
        </a> */}
      </div>
    </>
  );
};

export default Footer;
