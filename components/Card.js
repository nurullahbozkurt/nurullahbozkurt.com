import Image from "next/image";
import Link from "next/link";

const Card = ({ image, paragraph, link }) => {
  console.log(paragraph);
  return (
    <>
      <div className=" hover:border rounded-xl hover:shadow-2xl bg-gray-100 flex flex-col m-5">
        <Link href="/detail" passHref>
          <div className=" p-4 border-b rounded-t-xl bg-black flex justify-center items-center ">
            <Image
              className="rounded shadow-2xl "
              width="300"
              height="170"
              src={image}
            ></Image>
          </div>
        </Link>
        <div
          style={{ fontFamily: "Nunito" }}
          className="p-3 font-bold flex flex-col items-start "
        >
          <h2 className=" leading-7 ">{paragraph}</h2>
          <a target="_blank" className="text-red-800" href={link}>
            Visited
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;
