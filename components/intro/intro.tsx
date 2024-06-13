"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/section-context";
import { useEffect } from "react";

const Intro = () => {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Home");
    }
  }, [inView]);
  return (
    <section ref={ref} id="home" className="mt-10 md:mt-0">
      <div
        className="
        flex items-center justify-center"
      >
        <div className="relative ">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/assets/Saif.jpg"
              width={192}
              height={192}
              priority
              alt="Saif Mohammed"
              className="rounded-full border-4 border-white dark:border-gray-200"
            />
          </motion.div>
          <motion.span
            className="absolute  bottom-[14px] right-10 text-5xl /text-green-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <div className="space-y-4">
        <motion.p
          className="text-xl mt-2 text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-bold text-gray-800">Hi there! </span>
          <strong className="text-2xl text-blue-600 dark:text-blue-700">
            I'm Saif, a MERN Stack Developer.
          </strong>
          <span className="text-gray-700 dark:text-gray-400 font-medium ">
            I specialize in simplifying the complex, transforming ideas into
            seamless experiences.
          </span>
        </motion.p>
        <motion.div
          className="flex gap-3 flex-col lg:flex-row justify-center text-center md:flex-row"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="https://www.linkedin.com/in/saif-mohammed-2a4ab31a6/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0077b5] text-white p-2 
            px-3 rounded-full 
            items-center gap-1 
            hover:scale-105 
            active:scale-95 font-medium transition
            flex justify-center group"
          >
            Hire me <BsArrowRight className="group-hover:ml-2 transition-all" />
          </Link>
          <Link
            href="/assets/Resume.pdf"
            // target="_blank"
            className="flex bg-white p-2
             rounded-full justify-center 
             items-center gap-1 hover:scale-105
              active:scale-95 font-medium transition dark:text-gray-600 group"
            download={true}
          >
            Download CV <HiDocumentDownload className="group-hover:mt-2" />
          </Link>
          <Link
            href="https://github.com/Saif-Mohammed1"
            target="_blank"
            rel="noreferrer"
            className=" bg-[#333] w-fit rounded-full p-2 self-center text-white hover:bg-gray-600"
          >
            <FaGithub />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
