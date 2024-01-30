"use client";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <motion.h2
        className="title"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.22 }}
      >
        My Projects
      </motion.h2>
      <div>
        {projectsData.map(({ img, name, Url, desc, tags }, inx) => (
          <section
            key={inx}
            className="group overflow-hidden relative my-3 space-y-3 bg-gray-300 p-2 min-h-[15rem]"
          >
            <div className="w-1/2 pb-8 ">
              <h3 className="text-2xl font-semibold   overflow-x-scroll px-3">
                {name}
              </h3>
              <p className="my-2 text-gray-950 mb-3">{desc}</p>
              <ul className="flex /justify-between gap-2 items-center flex-wrap">
                {tags.map((tag, inx) => (
                  <li
                    key={inx}
                    className="bg-black/[0.7] text-white p-1 px-3 rounded-full /uppercase"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="absolute top-3 right-0 w-1/2 /w-[25rem]
            h-full cursor-pointer hover:-rotate-2  
            /group-even:order-1 /right-[initial] 
            /group-even:-left-0 /group-even:hover:rotate-2 "
            >
              <Image
                src={img}
                alt={name}
                quality={95}
                // width={400}
                // height={400}
                className=" h-full rounded-[10px] /shadow-2xl"
              />
            </div>
            <Link
              href={Url}
              className="bg-black absolute -bottom-8 w-full group-hover:bottom-0 p-1 text-white transition-all duration-[1s] -ml-2"
            >
              {name}
            </Link>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Projects;
