"use client";

import { useActiveSectionContext } from "@/context/section-context";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.9 });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView]);
  return (
    <section ref={ref} id="about" className="section text-center">
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
        className="text-black/70 dark:text-gray-400 font-medium"
      >
        Hello, I'm Saif, an experienced web developer dedicated to creating
        innovative and user-centric digital solutions. With a proven track
        record of transforming ideas into functional, high-performance web
        applications, I am committed to delivering exceptional user experiences
        through meticulous attention to detail and a deep understanding of
        modern web technologies. My extensive experience includes developing
        dynamic web pages, robust backend systems, and seamless user interfaces,
        all while ensuring security and scalability. I thrive in collaborative
        environments and am passionate about leveraging my expertise to turn
        visionary projects into reality. Let's work together to create something
        extraordinary.
      </motion.p>
    </section>
  );
};

export default About;
