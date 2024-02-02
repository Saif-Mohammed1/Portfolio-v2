"use client";
import { navLinks } from "@/lib/data";

import Link from "next/link";

// import { motion } from "framer-motion";
// const Header = () => {
//   return (
//     <header
//       //   className=" bg-white/50 /bg-opacity-50 backdrop-blur-sm w-[80%] h-[40px] mt-[1rem] rounded-full mx-auto flex items-center p-3 "
//       //   initial={{ y: -100, opacity: 0 }}
//       //   animate={{ y: 0, opacity: 1 }}
//       className="z-[999] relative"
//     >
//       {/* <nav className=" /bg-white w-full"> */}
//       <motion.nav
//         className="fixed translate-x-1/2 bg-white/50 /bg-opacity-50 backdrop-blur-sm w-[80%] h-[40px] mt-[1rem] rounded-full mx-auto flex /items-center p-3 "
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//       >
//         <ul className="flex justify-between items-center p-1 w-full">
//           <li>home</li>
//           <li>1</li>
//           <li>2</li>
//           <li>3</li>
//         </ul>
//       </motion.nav>
//     </header>
//   );
// };
// export default Header;*/
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/section-context";

const Header = () => {
  const { activeSection, setActiveSection } = useActiveSectionContext();
  return (
    <header className="z-[999] relative">
      <motion.nav
        className="  fixed left-0 right-0 mx-auto
         bg-white/70 /bg-opacity-50
          backdrop-blur-sm md:w-[80%] 
          /h-12 sm:h-[initial] md:mt-[1rem]
           md:rounded-full flex justify-center items-center p-2 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex justify-around md:justify-between  items-center /p-2 w-full flex-wrap">
          {navLinks.map(({ name, link }) => (
            <motion.li
              key={name}
              className={`relative  hover:text-gray-950 
              transition font-medium  py-1 px-2 ${
                activeSection === name ? "text-gray-950 dark:text-gray-200" : ""
              }
              dark:text-gray-500 dark:hover:text-gray-300 `}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.02 }}
            >
              <Link href={link} onClick={() => setActiveSection(name)}>
                {name}
              </Link>
              {name === activeSection && (
                <motion.span
                  className="absolute inset-0
                 bg-gray-200 
                rounded-full -z-10 dark:bg-gray-800"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                ></motion.span>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
