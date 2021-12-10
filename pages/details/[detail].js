import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { useNurullah } from "../../contexts/context";
import { useRouter } from "next/router";
import Card from "../../components/shared/Card";

const Detail = () => {
  const { clientProjects, hobiesProjects } = useNurullah();
  console.log(hobiesProjects);
  const router = useRouter();
  const id = router.query.detail;

  function projectFinded(item) {
    return item.title === id;
  }
  const client = clientProjects.find(projectFinded);
  const hobies = hobiesProjects.find(projectFinded);

  const projects = hobies ? hobies : client;
  console.log(projects && projects.features);

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

          <div className="col-span-1 lg:col-span-2 p-5">
            <div className=" flex items-center justify-center font-bold text-2xl ">
              About The Project
            </div>
            <div className=" text-lg">{projects && projects.description}</div>
            <ul class="list-disc">
              {projects &&
                projects.features.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Detail;
