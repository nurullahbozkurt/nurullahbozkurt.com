import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import useTranslation from "next-translate/useTranslation";

const Card = ({ projects }) => {
  const { t, lang } = useTranslation("common");
  const visited = t("common:visited");
  return (
    <>
      <div className="font-nunito rounded-xl shadow-specialX bg-gray-100 flex flex-col m-5">
        <div>
          <div className=" p-4 border-b rounded-t-xl bg-black flex justify-center items-center ">
            <Image
              className="rounded shadow-2xl "
              width="350"
              height="180"
              src={projects.image}
            ></Image>
          </div>
        </div>
        <div className="p-3 font-bold text-lg text-center ">
          <a
            target="_blank"
            className="flex items-center justify-center text-blue-900"
            href={projects.link}
          >
            {visited}
            <div className="font-bold text-3xl">
              <IoIosArrowForward />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
