"use client";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

import Project from "./projectItem";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/section-context";
import { useEffect } from "react";
// import { useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";

const Projects = () => {
  // const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.33 1"],
  // });
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView]);
  return (
    <section ref={ref} id="projects" className="section ">
      <motion.h2
        className="title"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        // transition={{ delay: 0.22 }}
      >
        My Projects
      </motion.h2>
      <div>
        {projectsData.map((data, inx) => (
          <Project key={inx} {...data} />
        ))}

        {/* {projectsData.map(
          (
            { img, name, Url, desc, tags },
            inx
          ) => (
            //  <motion.div
            //   ref={ref}
            //   key={inx}
            //   className="group overflow-hidden relative my-3 space-y-3 bg-gray-300 p-2 min-h-[10rem]"
            //   style={{
            //     scale: scaleProgress,
            //     opacity: opacityProgress,
            //   }}
            // >
            //   <section
            //     // key={inx}
            //     className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
            //   >
            //     <div className="w-1/2 pb-8 ">
            //       <h3 className="text-2xl font-semibold  px-3">{name}</h3>
            //       <p className="my-2 text-gray-950 mb-3">{desc}</p>
            //       <ul className="flex /justify-between gap-2 items-center flex-wrap">
            //         {tags.map((tag, inx) => (
            //           <li
            //             key={inx}
            //             className="bg-black/[0.7] text-white p-1 px-3 rounded-full /uppercase"
            //           >
            //             {tag}
            //           </li>
            //         ))}
            //       </ul>
            //     </div>
            //     <div
            //       className="absolute top-3 -right-10 w-1/2 /w-[25rem]
            //   h-full cursor-pointer hover:-rotate-2
            //   /group-even:order-1 /right-[initial]
            //   /group-even:-left-0 /group-even:hover:rotate-2 "
            //     >
            //       <Image
            //         src={img}
            //         alt={name}
            //         quality={95}
            //         // width={400}
            //         // height={400}
            //         className=" h-full rounded-[10px] /shadow-2xl"
            //       />
            //     </div>
            //     <Link
            //       href={Url}
            //       className="bg-black absolute -bottom-8 w-full group-hover:bottom-0 p-1 text-white transition-all duration-[1s] -ml-2"
            //     >
            //       {name}
            //     </Link>
            //   </section>
            // </motion.div>
          )
        )} */}
      </div>
    </section>
  );
};

export default Projects;
