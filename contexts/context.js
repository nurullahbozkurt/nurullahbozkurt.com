import { createContext, useContext, useState } from "react";

const NurullahContext = createContext();
const useNurullah = () => useContext(NurullahContext);

const ContextProvider = ({ children }) => {
  const clientProjects = [
    {
      title: "meddo.fr",
      image: "/img/meddo.png",
      link: "https://www.meddo.fr/",
      description:
        "Landing page project to promote a mobile app in use in France.Our client wanted a strong Seo project, so I used Next.JS technology.",
      statusTitle: "Completed",
      status: true,
      features: [
        ["JavaScript"],
        ["Next.JS Framework"],
        ["TailwindCss Library"],
        ["Seo Compatibility"],
        ["Multi Language"],
        ["Response Design"],
        ["Mobile Compatibility"],
      ],
    },
    {
      title: "Survey Project",
      image: "/img/survey.png",
      link: "https://questionnaire-saint-gobain-web-ahp8c.ondigitalocean.app/",
      description:
        "The survey application I created for our client. In this application, the questionnaires filled by the users are stored in the database.",
      statusTitle: "Completed",
      status: true,
      features: [
        ["React.JS Framework"],
        ["Node.JS Framework"],
        ["TailwindCss Library"],
        ["Response Design"],
        ["Mobile Compatibility"],
      ],
    },
    {
      title: "televizyononarim",
      image: "/img/tv.png",
      link: "https://televizyononarim.com",
      description:
        "SEO compatible web project for a television repair customer.We coded it for our customer, paying attention to responsive design and mobile compatibility.",
      statusTitle: "Completed",
      status: true,
      features: [
        ["Next.JS Framework"],
        ["TailwindCss Library"],
        ["Response Design"],
        ["Mobile Compatibility"],
        ["Seo Compatibility"],
      ],
    },

    {
      title: "devnoty",
      image: "/img/devnoty.png",
      link: "https://devnoty.com",
      description: "www.devnoty.com My institution's website.",
      statusTitle: "Completed",
      status: true,
      features: [
        ["Next.JS Framework"],
        ["TailwindCss Library"],
        ["Response Design"],
        ["Mobile Compatibility"],
        ["Seo Compatibility"],
      ],
    },
  ];

  const hobiesProjects = [
    {
      title: "pokemon",
      image: "/img/pokemon.png",
      link: "https://pokemon-app-puce.vercel.app/",
      description:
        "Project made with Pokemon API using React technology. Made for kids of the 90's :)",
      statusTitle: "Development Continues.",
      status: false,
      gitHub: "https://github.com/nurullahbozkurt/pokemon-app",
      features: [
        ["React.JS framework"],
        ["Pokemon Rest API Usage"],
        ["TailwindCss Library"],
        ["Response Design"],
        ["Mobile Compatibility"],
      ],
    },
    {
      title: "directory",
      image: "/img/directory.png",
      link: "https://directory-tailwind.vercel.app/",
      description:
        "Made using Yelp's Rest API. In this project, you can find the businesses in Istanbul and information about these businesses.",
      statusTitle: "Development Continues.",
      status: false,
      gitHub: "https://github.com/nurullahbozkurt/directory-tailwind",
      features: [
        ["Next.JS Framework"],
        ["Yelp Rest API Usage"],
        ["TailwindCss Library"],
        ["Response Design"],
        ["Mobile Compatibility"],
      ],
    },
    {
      title: "personal-project",
      image: "/img/personal.png",
      link: "https://personal-management.vercel.app/",
      description:
        "In this application made with Javascript, you can keep your staff in Local Storage and make updates.",
      statusTitle: "Development Continues.",
      gitHub: "https://github.com/nurullahbozkurt/personal-management",
      features: [
        ["JavaScript"],
        ["Fake API Usage"],
        ["Response Design"],
        ["Mobile Compatibility"],
      ],
    },
    {
      title: "movies-project",
      image: "/img/movies.png",
      link: "https://movie-website-five.vercel.app/",
      description:
        "A project I made using IMDB Rest API. In this project, I listed a few movie categories that I got from the API with their features.",
      statusTitle: "Development Continues.",
      status: false,
      gitHub: "https://github.com/nurullahbozkurt/movie-website",
      features: [
        ["React.JS Framework"],
        ["IMDB Rest API Usage"],
        ["TailwindCss Library"],
        ["Response Design"],
        ["Mobile Compatibility"],
      ],
    },
    {
      title: "weather-project",
      image: "/img/weather.png",
      link: "https://weather-app-two-swart.vercel.app/",
      description:
        "Location based weather app made with React. You can find out the weather conditions of the city you are looking for and the weather conditions of your location.",
      statusTitleTitle: "Development Continues.",
      status: false,
      gitHub: "https://github.com/nurullahbozkurt/weather-app",
      features: [
        ["React.JS Framework"],
        ["Weather Rest API Usage"],
        ["TailwindCss Library"],
        ["Response Design"],
        ["Mobile Compatibility"],
      ],
    },
  ];

  return (
    <NurullahContext.Provider value={{ clientProjects, hobiesProjects }}>
      {children}
    </NurullahContext.Provider>
  );
};
export { ContextProvider, useNurullah };
