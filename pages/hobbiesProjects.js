import { useNurullah } from "../contexts/context";
import HobiesProjectCard from "../components/HobiesProjectCard";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
const client = () => {
  const { hobiesProjects } = useNurullah();

  return (
    <div className=" min-h-full">
      <Header />
      <div className="font-nunito sm:w-full h-20 sm:my-20 my-5">
        <div className="flex flex-col items-center justify-center  space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">My Hobies Projects</h1>
        </div>
      </div>
      <div className=" w-11/12 sm:w-9/12 m-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {hobiesProjects.map((item, index) => (
            <HobiesProjectCard key={index} projects={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default client;
