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
        className="hover:bg-gray-200 cursor-pointer font-nunito shadow-specialX rounded-xl  bg-gray-100 flex flex-col m-5"
      >
        <div>
          <div className=" p-3 border-b rounded-t-xl bg-black flex justify-center items-center ">
            <Image
              className="rounded shadow-2xl "
              width="300"
              height="170"
              src={projects.image}
            ></Image>
          </div>
        </div>
        <div className="flex justify-center items-center py-1">
          <img
            className=" w-5 h-6"
            src="https://d33wubrfki0l68.cloudfront.net/06745f2f70277023b0910a311bd9735572094fc5/49259/assets/images/logo.svg"
          ></img>
        </div>
      </div>
    </>
  );
};
export default ClientProjectCard;
