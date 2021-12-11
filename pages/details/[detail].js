import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { useNurullah } from "../../contexts/context";
import { useRouter } from "next/router";
import Card from "../../components/shared/Card";

const Detail = () => {
  const { clientProjects, hobiesProjects } = useNurullah();

  const router = useRouter();
  const id = router.query.detail;
  function projectFinded(item) {
    return item.title === id;
  }
  const client = clientProjects.find(projectFinded);
  const hobies = hobiesProjects.find(projectFinded);
  const projects = hobies ? hobies : client;

  const statusColor =
    projects && projects.status === true ? "text-green-700" : "text-red-700";
  console.log(statusColor);

  if (!projects) {
    return (
      <>
        <p>loading</p>
      </>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-between ">
      <Header />
      <div>
        <div className="font-nunito lg:container lg:mx-auto  md:grid grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-1" projects={projects} />

          <div className="col-span-1 lg:col-span-2 p-10 sm:px-5 sm:py-0">
            <div className=" flex items-center justify-center font-bold text-2xl ">
              About The Project
            </div>
            <div className="py-3 font-semibold sm:text-lg">
              {projects && projects.description}
            </div>
            <ul class="list-disc">
              {projects &&
                projects.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
            {projects && projects.gitHub ? (
              <div className="flex space-x-2 pt-2">
                <h1 className="font-bold text-green-900">Open Source:</h1>
                <a
                  target="_blank"
                  href={projects.gitHub}
                  alt=""
                  className="underline font-semibold decoration-green-900 decoration-wavy"
                >
                  Github Link
                </a>
              </div>
            ) : (
              ""
            )}

            <p className={`py-3 ${statusColor} font-bold`}>
              <span className="text-black">Status: </span>
              {projects && projects.statusTitle}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Detail;
