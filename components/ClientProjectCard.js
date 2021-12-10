import Image from "next/image";
import { useRouter } from "next/dist/client/router";

const ClientProjectCard = ({ projects }) => {
  const router = useRouter();
  const detail = () => {
    router.push(`/details/${projects.title}`);
  };
  return (
    <>
      <div
        onClick={detail}
        className=" font-nunito shadow-specialX rounded-xl  bg-gray-100 flex flex-col m-5"
      >
        <div>
          <div className=" p-4 border-b rounded-t-xl bg-black flex justify-center items-center ">
            <Image
              className="rounded shadow-2xl "
              width="300"
              height="170"
              src={projects.image}
            ></Image>
          </div>
        </div>
        <div className="font-bold text-center">
          <Image
            width="20"
            height="35"
            src="/../public/img/devnotyLogo.svg"
          ></Image>
        </div>
      </div>
    </>
  );
};
export default ClientProjectCard;
