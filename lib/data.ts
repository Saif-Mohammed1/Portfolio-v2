import Ecommerce from "../public/assets/image/ecommerce.png";
import Eshop_Mobile from "../public/assets/image/Shop_mobile_app.png";
import Shop from "../public/assets/image/shop.png";
import Memory from "../public/assets/image/Memory-Game.png";
import To from "../public/assets/image/TO-DO-LIST.png";
import Weather from "../public/assets/image/Weather-App.png";
import Weather_Mobile from "../public/assets/image/weather_mobile_app.png";
import Template1 from "../public/assets/image/Leon-Template.png";
import Template2 from "../public/assets/image/Kasper-Template-Two.png";
import Template3 from "../public/assets/image/Template-Three.png";
import Manage from "../public/assets/image/manage-landing-page.png";
import Youtube from "../public/assets/image/youtube-api.png";
import Spacial from "../public/assets/image/Spacial-Design.png";
import Sunnyside from "../public/assets/image/SunnySide.png";
import fashFlash from "../public/assets/image/fashFlash.png";
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
    name: "fashFlash",
    desc: "Crafted a feature-rich web application independently. Users can filter products by category, rating, price range, or search by name. Clicking on a product displays detailed information including price, description, and discounts, with options to add to cart or wishlist. Authenticated users can save items for later viewing. The platform includes user roles for normal users, sellers, and admins, each with specific permissions. Security features include email verification, login blocking, and rate limiting. Users receive email notifications upon purchase completion and can track order progress. Additional features include user profile management, password reset, and product management for sellers. Admins have access to a comprehensive dashboard to manage all data. Business logic optimizations ensure security and reliability.",
    Url: "https://ecommerce-v2-livid.vercel.app/",
    tags: [
      "mui/material",

      "bcryptjs",
      "cloudinary",
      "countries-list",
      "jsonwebtoken",
      "mongoose",
      "next",
      "next-auth",
      "node-cron",
      "nodemailer",
      "react",
      "react-dom",
      "react-toastify",
      "stripe",
      "styled-components",
      "sweetalert2",
      "uploadthing",
    ],
    img: fashFlash,
  },
  {
    img: Ecommerce,
    // name: "Ecommerce&Laravel",
    name: "EShop",
    // desc: "i worked as i full stack in this project which i used laravel as backend server you can add product to card encress item decrement item you can check your cartitem",
    desc: "This project was performed as “I full stack”. Powered by React and Redux on the frontend and backed by Laravel, my platform offers a rich user experience. This shop page represents a diverse array of items and a user-friendly cart system, which allows you to manage your selections. Sign up or log in securely using Google authentication or email.",
    Url: "https://ecommerce-v2-livid.vercel.app/",
    tags: ["react", "redux", "laravel", "styled-components"],
  },
  {
    img: Eshop_Mobile,
    // name: "Ecommerce&Laravel",
    name: "EShop Mobile App",
    desc: "Developed feature-rich Android apps, including a fully functional e-commerce app from scratch. Acquired skills in backend data management, implemented Redux for user session persistence, and added user-friendly cart and authentication. Leveraged Laravel as the backend service for efficiency and reliability.",
    Url: "https://github.com/Saif-Mohammed1/Eshop-mobile-app/",
    tags: ["react-native", "redux", "laravel", "styled-components"],
  },
  {
    img: Shop,
    // name: "Shop&firebase",
    name: "Clothes Shop",
    // desc: "i worked as i full stack in this project which i used google firebase as backend server you can add product to card encress item decrement item you can check your cartitem",
    desc: "This project was performed as “I full stack”, a React and Redux-powered e-commerce platform. Firebase is used as backend server here. This platform allows users to explore categories, shop for a diverse range of products and manage user-friendly cart system. Secure user authentication, supporting Google and email sign-ins, ensures a personalized experience.",
    Url: "https://superlative-chebakia-1f1043.netlify.app/",
    tags: ["react", "redux", "firebase", "styled-components"],
  },
  {
    img: Memory,
    name: "Memory-Game",
    desc: "Pure Js is used in this platform. The project is aimed to represent a game, which develops a good memory skill by implicating cards.",
    Url: "https://saif-mohammed1.github.io/Memory-Game/",
    tags: ["html", "css", "javaScript"],
  },
  {
    img: To,
    name: "To-DO-List",
    desc: "The project is targeted at audience, which requires a platform for making To-Do-Lists. It allows users to add tasks to the list and remove them easily. It is possible to reload the page, as the data is saved on the local storage.",

    Url: "https://saif-mohammed1.github.io/To-DO-List/",
    tags: ["html", "css", "javaScript"],
  },
  {
    img: Weather,
    name: "Weather-App",
    desc: "The project is performed by React, Axios, Api, Css and aimed to give the possibility to check the weather depending on the regions.",
    Url: "https://fastidious-cupcake-4ef5a8.netlify.app/",
    tags: ["react", "axios", "api", "css"],
  },
  {
    img: Weather_Mobile,
    name: "Weather Mobile App",
    desc: "Developed a React Native weather app for seamless weather updates. Users can search and monitor weather conditions globally. Features an intuitive interface, personalized city selection with AsyncStorage, and a visually pleasing design. Elevate your weather-checking experience with the Weather App.",
    Url: "https://github.com/Saif-Mohammed1/Weather-app-react-native",
    tags: ["react-native", "axios", "api", "tailwindcss"],
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
    desc: "The project was done by using HTML, Css and Javascript, and represents the feature of moving to different sections of the page by clicking on the navbar section.",
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
    desc: "This platform allows users to fetch Youtube playlist data by entering the URL for the list.",
    Url: "https://strong-cranachan-9d6614.netlify.app/",
    tags: ["react", "api", "styled-components"],
  },
  {
    img: Spacial,
    name: "Spacial-Design",
    desc: "This project was performed by using HTML, Css and Javascript. It allows users to change theme, color or other features in general.",

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
  "react-native",
  "redux",
  "redux-saga",
  "next.js",
  "mongoDB",
  "express",
  "git",
  "firebase",
  "PugJs",
  "OWASP Top 10 vulnerabilities",
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
    name: "feature-rich web application",
    desc: "Crafted a feature-rich web application independently. Proficient in advanced filtering for product search, detailed product information display, and user authentication with session persistence. Implemented multiple user roles for varied permissions. Security features include email verification and login blocking. Users receive order notifications and can request refunds. Admins manage the platform via a comprehensive dashboard. Leveraged business logic optimization for enhanced security.",
    icon: React.createElement(FaReact),
    date: "2024",
  },
  {
    name: "full stack developer",
    // desc: 'I"ve created full stack ecommerce by my own i lreand how to mange and handle data from backend and how to send it i added useful feature such redux which save user session on reload also i added cart,user authentication also google auth service I google firebase as backend service  ',
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
    name: "full stack android mobile apps developer",
    // desc: 'I"ve created full stack android mobile apps  ecommerce by my own i learned how to mange and handle data from backend and how to send it i added useful feature such redux which save user session on reload also i added cart,user authentication   I used laravel as backend service',
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
