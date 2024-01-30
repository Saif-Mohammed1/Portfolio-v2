"use client";
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

// export default Header;
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed left-0 right-0 mx-auto bg-white/70 /bg-opacity-50 backdrop-blur-sm md:w-[80%] h-[40px] md:mt-[1rem] md:rounded-full flex items-center p-3 "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ul className="flex justify-between items-center p-1 w-full">
          <li>Home</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Header;
