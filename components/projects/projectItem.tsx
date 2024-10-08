// "use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ name, desc, tags, img, Url }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [readMore, setReadMore] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div
        className="bg-gray-100 max-w-[42rem]
       border border-black/5 rounded-lg
        overflow-hidden sm:pr-8 relative 
        /sm:h-[20rem] hover:bg-gray-200
         transition sm:group-even:pl-8 
         dark:text-white dark:bg-white/10
          dark:hover:bg-white/20 m-auto"
      >
        <div
          className={`pt-4 pb-7 px-5 
        sm:pl-10 sm:pr-2 sm:pt-10 
     
        ${
          readMore || showSkills
            ? "sm:max-w-[100%] "
            : "sm:max-w-[50%] sm:group-even:ml-[18rem]"
        }
        flex flex-col 
        h-full `}
        >
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {readMore ? (
              desc
            ) : (
              <>
                {desc.substring(0, 100)}{" "}
                <span
                  className="text-blue-500 cursor-pointer hover:underline "
                  onClick={() => setReadMore(true)}
                >
                  read more....
                </span>
              </>
            )}
          </p>
          <ul className="flex flex-wrap mt-4 mb-8 gap-2 /sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className={`
        ${index >= 5 && !showSkills ? "hidden" : ""}
        bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70`}
                key={index}
              >
                {tag}
              </li>
            ))}
            {!showSkills && tags.length > 5 && (
              <button
                onClick={() => setShowSkills(true)}
                className="text-blue-500 hover:underline"
              >
                Show more
              </button>
            )}
          </ul>
        </div>
        {!readMore && !showSkills && (
          <Image
            src={img}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
          />
        )}
        <Link
          href={Url}
          target="_blank"
          className="bg-black/50 absolute -bottom-8 
          w-full group-hover:bottom-0 p-1 
          text-white transition-all 
          duration-[1s] m-0 sm:group-even:-ml-8
          "
        >
          {name}
        </Link>
      </div>
    </motion.section>
  );
}
