"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h1
        // className="text-2xl text-center my-2 font-medium "
        className="title"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.22 }}
      >
        About me
      </motion.h1>
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.23 }}
      >
        Hello, I'm Saif, a skilled web and Android developer with a strong
        background in utilizing essential tools to create innovative projects.
        My expertise extends to frameworks like React and React Native, where
        I've successfully built applications ranging from e-commerce solutions
        to dynamic web pages. I'm passionate about transforming ideas into
        functional and user-friendly digital experiences. If you have exciting
        projects in mind, please feel free to contact me; I'd love to
        collaborate and turn your ideas into reality.
      </motion.p>
    </section>
  );
};

export default About;
