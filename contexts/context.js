import { createContext, useContext, useState } from "react";

const NurullahContext = createContext();
const useNurullah = () => useContext(NurullahContext);

const ContextProvider = ({ children }) => {
  const clientProjects = [
    {
      title: "televizyononarim",
      image: "/img/tv.png",
      link: "https://televizyononarim.com",
      description:
        "Seo compatible client project we made using Next.JS Fnd Tailwind library.",
      features: [
        ["JavaScript"],
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
      features: [
        ["JavaScript"],
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
        "Project made with Pokemon API using React technology. Tailwind CSSlibrary is used in this project. The project is mobile friendly.",
      features: [
        ["JavaScript"],
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
        "Made with React and Tailwind CSS library. Web application to search for businesses in Istanbul using the Yelp Rest API.",
      features: [
        ["JavaScript"],
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
      link: "https://weather-app-two-swart.vercel.app/",
      description:
        "In this application made with Javascript, you can keep your staff in Local Storage and make updates.",
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
        "Cinema project I made with IMDB Rest API. You can list and select incoming movies via API. I made this project with React using responsive design.1u",
      features: [
        ["JavaScript"],
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
      description: "Location based weather app made with React",
      features: [
        ["JavaScript"],
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
