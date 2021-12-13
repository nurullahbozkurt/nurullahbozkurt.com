import { createContext, useContext } from "react";

const NurullahContext = createContext();
const useNurullah = () => useContext(NurullahContext);

const ContextProvider = ({ children }) => {
  const clientProjects = [
    {
      title: "meddo.fr",
      image: "/img/meddo.png",
      link: "https://www.meddo.fr/",
      descriptionEN:
        "Landing page project to promote a mobile app in use in France.Our client wanted a strong Seo project, so I used Next.JS technology.",
      descriptionTR:
        "Fransa'da kullanılan bir mobil uygulamanın tanıtımı için istenilen bir landing page web sayfası. Müşterimiz güçlü bir Seo projesi istedi, bu yüzden Next.JS teknolojisini kullandık.",
      statusTitleEN: "Completed",
      statusTitleTR: "Tamamlandı",
      status: true,
      statusEN: "Status",
      statusTR: "Durum",

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
      title: "survey-application",
      image: "/img/survey.png",
      link: "https://questionnaire-saint-gobain-web-ahp8c.ondigitalocean.app/",
      descriptionEN:
        "The survey application I created for our client. In this application, the questionnaires filled by the users are stored in the database.",
      descriptionTR:
        "Fransada yapılacak olan bir anket için yapmış olduğumuz bir web uygulaması. Bu uygulamada, kullanıcılar tarafından verilen cevaplar bir veritabanında depolanmakta olup, admin paneli ile anket sahibine detaylı bir şekilde listelenmektedir.",
      statusTitleEN: "Completed",
      statusTitleTR: "Tamamlandı",
      status: true,
      statusEN: "Status",
      statusTR: "Durum",
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
      descriptionEN:
        "SEO compatible web project for a television repair customer.We coded it for our customer, paying attention to responsive design and mobile compatibility.",
      descriptionTR:
        "Televizyon tamiri yapan bir müşterimiz için yapmış olduğumuz SEO uyumlu bir web projesi. Responsive tasarım ve mobil uyumluluğa dikkat ederek müşterimiz için kodladık.",
      statusTitleEN: "Completed",
      statusTitleTR: "Tamamlandı",
      status: true,
      statusEN: "Status",
      statusTR: "Durum",
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
      descriptionEN:
        "www.devnoty.com The website of the company that I am involved in and to which we provide software services.",
      descriptionTR:
        "www.devnoty.com Dahil olduğum ve yazılım hizmeti vermiş olduğumuz şirketin web sitesi.",
      statusTitleEN: "Completed",
      statusTitleTR: "Tamamlandı",
      status: true,
      statusEN: "Status",
      statusTR: "Durum",
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
      descriptionEN:
        "Project made with Pokemon API using React technology. Made for kids of the 90's :)",
      descriptionTR:
        "Pokemon Rest API kullanarak yapmış olduğum proje. İstediğiniz pokemonu aratabilir ve özelliklerini görebilirsiniz. 90'lı yılların çocukları için.. :)",
      statusTitleEN: "Development Continues.",
      statusTitleTR: "Geliştirmeye devam ediyorum.",
      status: false,
      statusEN: "Status",
      statusTR: "Durum",
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
      descriptionEN:
        "Made using Yelp's Rest API. In this project, you can find the businesses in Istanbul and information about these businesses.",
      descriptionTR:
        "Yelp'in Rest API ını kullarak yaptığım proje'. Bu projede İstanbul'daki işletmeleri ve bu işletmelerle ilgili bilgilere ulaşabilirsiniz.",
      statusTitleEN: "Development Continues.",
      statusTitleTR: "Geliştirmeye devam ediyorum.",
      status: false,
      statusEN: "Status",
      statusTR: "Durum",
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
      descriptionEN:
        "In this application made with Javascript, you can keep your staff in Local Storage and make updates.",
      descriptionTR:
        "Javascript ile yapmış olduğum bu uygulamada personelinizi Local Storage'da tutabilir ve güncellemeler yapabilirsiniz.",
      statusTitleEN: "Development Continues.",
      statusTitleTR: "Geliştirmeye devam ediyorum.",
      status: false,
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
      descriptionEN:
        "A project I made using IMDB Rest API. In this project, I listed a few movie categories that I got from the API with their features.",
      descriptionEN:
        "IMDB Rest API kullanarak yaptığım bir proje. Bu projemde API'den aldığım birkaç film kategorisini özellikleriyle birlikte listeledim. Ayrıca projeye ek olarak bir sonraki adımda seçilen filmlerden sinema koltuk seçimi yapıp bilet alabiliyor olacağız.",
      statusTitleEN: "Development Continues.",
      statusTitleTR: "Geliştirmeye devam ediyorum.",
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
      descriptionEN:
        "Location based weather app made with React. You can find out the weather conditions of the city you are looking for and the weather conditions of your location.",
      descriptionTR:
        "React ile yapmış olduğum konum bazlı hava durumu uygulaması. Bulunduğunuz konumun ve öğrenmek istediğiniz şehrin hava şartlarını görebilirsiniz. ",
      statusTitleTitleEN: "Development Continues.",
      statusTitleTitleTR: "Geliştirmeye devam ediyorum.",
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
