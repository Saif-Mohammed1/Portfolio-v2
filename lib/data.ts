import Ecommerce from "../public/assets/image/ecommerce.png";
import Shop from "../public/assets/image/shop.png";
import Memory from "../public/assets/image/Memory-Game.png";
import To from "../public/assets/image/TO-DO-LIST.png";
import Weather from "../public/assets/image/Weather-App.png";
import Template1 from "../public/assets/image/Leon-Template.png";
import Template2 from "../public/assets/image/Kasper-Template-Two.png";
import Template3 from "../public/assets/image/Template-Three.png";
import Manage from "../public/assets/image/manage-landing-page.png";
import Youtube from "../public/assets/image/youtube-api.png";
import Spacial from "../public/assets/image/Spacial-Design.png";
import Sunnyside from "../public/assets/image/SunnySide.png";
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
// import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
export const navLinks = [
  {
    name: "Home",
    link: "#intro",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
] as const;
export const projectsData = [
  {
    img: Ecommerce,
    name: "Ecommerce&Laravel",
    desc: "i worked as i full stuck in this project which i used laravel as backend server you can add product to card encress item decrement item you can check your cartitem",
    Url: "https://ecommerce-v2-livid.vercel.app/",
    tags: ["react", "redux", "laravel", "styled-components"],
  },
  {
    img: Shop,
    name: "Shop&firebase",
    desc: "i worked as i full stuck in this project which i used google firebase as backend server you can add product to card encress item decrement item you can check your cartitem",
    Url: "https://superlative-chebakia-1f1043.netlify.app/",
    tags: ["react", "redux", "firebase", "styled-components"],
  },
  {
    img: Memory,
    name: "Memory-Game",
    desc: "i used pure js here,in this project it taste memory game which is dynamic give random number to cards ",
    Url: "https://saif-mohammed1.github.io/Memory-Game/",
    tags: ["html", "css", "javaScript"],
  },
  {
    img: To,
    name: "To-DO-List",
    desc: "user can add list to their daily list can remove double click on item if it done and don't worry if you reload the page because list saved on local storage",

    Url: "https://saif-mohammed1.github.io/To-DO-List/",
    tags: ["html", "css", "javaScript"],
  },
  {
    img: Weather,
    name: "Weather-App",
    desc: "user can check weather on it region by entered the city name ",
    Url: "https://fastidious-cupcake-4ef5a8.netlify.app/",
    tags: ["react", "axios", "api", "css"],
  },
  {
    img: Template1,
    name: "HTML-CSS-Template-One",
    desc: "the first project i've made ",
    Url: "https://saif-mohammed1.github.io/HTML_CSS_Template_One/",
    tags: ["html", "css"],
  },
  {
    img: Template2,

    name: "HTML-CSS-Template-Two",
    desc: "the second project i've made ",
    Url: "https://saif-mohammed1.github.io/Template-Two/#",
    tags: ["html", "css"],
  },
  {
    img: Template3,
    name: "HTML-CSS-Template-Three",
    desc: "user can move to each section by clicking on navbar section ",
    Url: "https://saif-mohammed1.github.io/HTML_And_CSS_Template_Three/",
    tags: ["html", "css", "javaScript"],
  },
  {
    img: Manage,
    name: "manage-landing-page",
    desc: " description not available yet",
    Url: "https://beamish-sunshine-e28ad1.netlify.app/",
    tags: ["react", "styled-components"],
  },
  {
    img: Youtube,
    name: "youtube-api",
    desc: "user can fetch youtube playlist data by entering the URL for the list",
    Url: "https://strong-cranachan-9d6614.netlify.app/",
    tags: ["react", "api", "styled-components"],
  },
  {
    img: Spacial,
    name: "Spacial-Design",
    desc: "user can change theme color also can allow to background to move or be static change word's color..... ",

    Url: "https://saif-mohammed1.github.io/Spacial-Design/",
    tags: ["html", "css", "javaScript"],
  },
  {
    img: Sunnyside,
    name: "Sunnyside",
    desc: "static page",
    Url: "https://saif-mohammed1.github.io/Sunnyside/",
    tags: ["html", "css"],
  },
] as const;

export const skillsData = [
  "html",
  "css",
  "sass",
  "tailwind",
  "styled-component",
  "javaScript",
  "node.js",
  "react",
  "redux",
  "redux-saga",
  "next.js",
  "mongoDB",
  "express",
  "git",
  "firebase",
] as const;

export const experiencesData = [
  {
    name: "meta react native bootcamp",
    // desc: '"I embarked on an enriching journey during the camp, where I delved into a multitude of valuable tools and skills. This transformative experience served as a pivotal advantage in my learning journey. I gained proficiency in React Native, a powerful framework for building cross-platform mobile applications. The curriculum extended beyond the realm of frameworks and libraries, encompassing fundamental concepts like working with data, mastering version control, and developing a Capstone project using React. The program covered the essentials, including React basics, principles of UX/UI design, and an insightful introduction to mobile development. My programming skills were honed through hands-on exercises, particularly focusing on JavaScript, the language that powers the dynamic functionalities of web and mobile applications. This comprehensive exposure equipped me with a well-rounded skill set, laying a solid foundation for my continued growth in the world of software development.',
    desc: "Enriching experience in a React Native bootcamp, gaining proficiency in cross-platform mobile app development. Covered essential concepts, including data handling, version control, and React basics. Developed a Capstone project and honed programming skills in JavaScript, laying a solid foundation for continued growth.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    name: "full stuck developer",
    // desc: 'I"ve created full stuck ecommerce by my own i lreand how to mange and handle data from backend and how to send it i added useful feature such redux which save user session on reload also i added cart,user authentication also google auth service I google firebase as backend service  ',
    // desc: "As a full-stack developer, I independently created a comprehensive e-commerce platform. This project showcased my proficiency in managing and handling data from the backend, implementing features such as Redux for preserving user sessions on reload, a user-friendly cart system, and robust user authentication, including Google Auth services. Leveraging Google Firebase as the backend service added scalability and efficiency to the project. This experience not only enhanced my full-stack development skills but also demonstrated my ability to create a seamless and secure e-commerce solution.",
    desc: "Created a comprehensive e-commerce platform independently. Proficient in managing backend data, implementing features like Redux for user session persistence, and user-friendly cart and authentication. Used Google Firebase for enhanced scalability and efficiency",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    name: "frontend developer",
    // desc: "its a weather app web page which user can check weather on it region by entered the city name ",
    // desc: "As a frontend developer, I contributed to the creation of a weather app web page, enabling users to easily check the weather by entering a city name. I focused on designing an intuitive and responsive user interface, ensuring a seamless experience. This project sharpened my frontend development skills, emphasizing user-centric design and real-time data interaction.",
    desc: "Contributed to a weather app web page, allowing users to check weather by entering a city name. Focused on creating an intuitive and responsive UI, enhancing user experience. Sharpened frontend development skills with emphasis on user-centric design and real-time data interaction.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    name: "full stuck android mobile apps developer",
    // desc: 'I"ve created full stuck android mobile apps  ecommerce by my own i learned how to mange and handle data from backend and how to send it i added useful feature such redux which save user session on reload also i added cart,user authentication   I used laravel as backend service',
    // desc: "As a full-stack Android mobile apps developer, I immersed myself in the dynamic world of creating comprehensive and feature-rich Android applications. One notable project in my portfolio is a fully functional e-commerce app, developed entirely from scratch. In this endeavor, I acquired essential skills in managing and handling data seamlessly from the backend, employing effective data transmission methods. To enhance the user experience, I integrated powerful features such as Redux, ensuring the preservation of user sessions even upon reloading the application. Additionally, I implemented essential functionalities like a user-friendly cart system and robust user authentication mechanisms. Leveraging Laravel as the backend service for this project added an extra layer of efficiency and reliability to the app, allowing for seamless communication between the frontend and backend components. This hands-on experience not only honed my technical skills but also provided me with a deep understanding of the intricacies involved in developing sophisticated Android applications.",
    desc: "Developed feature-rich Android apps, including a fully functional e-commerce app from scratch. Acquired skills in backend data management, implemented Redux for user session persistence, and added user-friendly cart and authentication. Leveraged Laravel as the backend service for efficiency and reliability.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;
/**Certainly! Here are the shortened descriptions:



Full Stack Developer:


"Created a comprehensive e-commerce platform independently. Proficient in managing backend data, implementing features like Redux for user session persistence, and user-friendly cart and authentication. Used Google Firebase for enhanced scalability and efficiency."




Frontend Developer:


"Contributed to a weather app web page, allowing users to check weather by entering a city name. Focused on creating an intuitive and responsive UI, enhancing user experience. Sharpened frontend development skills with emphasis on user-centric design and real-time data interaction."




Full Stack Android Mobile Apps Developer:


"Developed feature-rich Android apps, including a fully functional e-commerce app from scratch. Acquired skills in backend data management, implemented Redux for user session persistence, and added user-friendly cart and authentication. Leveraged Laravel as the backend service for efficiency and reliability."




Meta React Native Bootcamp:


"Enriching experience in a React Native bootcamp, gaining proficiency in cross-platform mobile app development. Covered essential concepts, including data handling, version control, and React basics. Developed a Capstone project and honed programming skills in JavaScript, laying a solid foundation for continued growth." */
