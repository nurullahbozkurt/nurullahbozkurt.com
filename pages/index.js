import Head from "next/head";
import Header from "../components/shared/Header";
import Card from "../components/Card";
import Footer from "../components/shared/Footer";

export default function Home() {
  return (
    <div className=" min-h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Electrolize&family=Nunito:wght@400;600;700&display=swap');
        </style>
      </Head>
      <Header />
      <div className="w-full h-20 my-20  ">
        <div
          style={{ fontFamily: "Nunito" }}
          className="flex flex-col items-center justify-center  space-y-2"
        >
          <h1 className="text-3xl font-bold"> I'm a Front end Developer </h1>
          <div>
            <h2 className="text-2xl">
              I love to built web-application using <strong>React</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className=" w-9/12 m-auto">
        <div className="grid grid-cols-3 mt-10">
          <Card
            image={"/img/devnoty.png"}
            link={"https://devnoty.com"}
            paragraph={
              "The web and mobile software company we are affiliated with"
            }
          />
          <Card
            image={"/img/pokemon.png"}
            link={"https://pokemon-app-puce.vercel.app/"}
            paragraph={
              "Project made with Pokemon API using React technology. Tailwind CSSlibrary is used in this project. The project is mobile friendly."
            }
          />
          <Card
            image={"/img/tv.png"}
            link={"https://televizyononarim.com"}
            paragraph={
              "Seo compatible client project we made using Nextjs and Tailwind library."
            }
          />
          <Card
            image={"/img/directory.png"}
            link={"https://directory-tailwind.vercel.app/"}
            paragraph={
              "Made with React and Tailwind CSS library. Web application to search for businesses in Istanbul using the Yelp Rest API."
            }
          />
          <Card
            image={"/img/personal.png"}
            link={"https://weather-app-two-swart.vercel.app/"}
            paragraph={
              "In this application made with Javascript, you can keep your staff in Local Storage and make updates."
            }
          />
          <Card
            image={"/img/movies.png"}
            link={"https://movie-website-five.vercel.app/"}
            paragraph={
              "Cinema project I made with IMDB Rest API. You can list and select incoming movies via API. I made this project with React using responsive design.1u"
            }
          />
          <Card
            image={"/img/weather.png"}
            link={"https://weather-app-two-swart.vercel.app/"}
            paragraph={"Location based weather app made with React"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
