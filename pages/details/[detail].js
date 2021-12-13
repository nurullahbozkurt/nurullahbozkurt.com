import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { useNurullah } from "../../contexts/context";
import { useRouter } from "next/router";
import Card from "../../components/shared/Card";
import useTranslation from "next-translate/useTranslation";

const Detail = () => {
  const { t, lang } = useTranslation("details");
  const detailTitle = t("details:title");
  const usedTechnologies = t("details:usedTechnologies");

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
              {detailTitle}
            </div>
            <div className="py-3 font-semibold sm:text-lg">
              {lang === "en" ? projects.descriptionEN : projects.descriptionTR}
            </div>
            <div className="py-2 font-bold">
              <h2>{usedTechnologies}:</h2>
            </div>
            <ul className="list-disc">
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
              <span className="text-black pr-1">
                {lang === "tr" ? projects.statusTR : projects.statusEN}
              </span>
              {lang === "tr" ? projects.statusTitleTR : projects.statusTitleEN}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Detail;
