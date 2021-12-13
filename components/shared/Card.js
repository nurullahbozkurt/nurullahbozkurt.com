import Image from "next/image";
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
        <div className="p-3 font-bold text-lg text-center">
          <a target="_blank" className=" text-red-800" href={projects.link}>
            {visited}
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
