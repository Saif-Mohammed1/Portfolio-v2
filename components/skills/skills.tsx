"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
// const { ref } = useSectionView("Skills");
const Skills = () => {
  const motionVariant = {
    initial: { opacity: 0, y: 100 },
    animate: (inx: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * inx },
    }),
  };
  return (
    <section id="skills" className="section">
      <motion.h2
        className="title "
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        My Skills
      </motion.h2>
      <ul
        className="mt-8 flex /justify-between 
      items-center 
      flex-wrap gap-2 text-gray-800"
      >
        {skillsData.map((skill, inx) => (
          <motion.li
            key={skill}
            className="bg-white p-2 px-3 
            /text-white rounded-full
            border border-black/40"
            variants={motionVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={inx}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
