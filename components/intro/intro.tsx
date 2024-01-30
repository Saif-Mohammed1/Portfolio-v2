"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiDocumentDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section id="home">
      {/* <div className="relative border-red-400 border">
        <div>
          <Image
            src="/assets/Saif.jpg"
            width={150}
            height={150}
            priority
            alt="Saif Mohammed"
            className="rounded-full"
          />
          <span className="absolute bottom-2 right-5 text-[2rem]">👋</span>
        </div>
      </div> */}
      <motion.div
        className="relative border-red-400 border /border-white"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        {/* <div className="relative"> */}
        <Image
          src="/assets/Saif.jpg"
          width={100}
          height={100}
          priority
          alt="Saif Mohammed"
          className="rounded-full border-4 border-white"
        />
        <span className="absolute bottom-1 left-[2.8rem] /right-5 text-[1.5rem] text-green-500">
          👋
        </span>
        {/* </div> */}
      </motion.div>

      <div className="space-y-4">
        <motion.p
          className="text-xl mt-2"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <span>Hi there!,</span>
          <strong>I'm a Mern Developer </strong>
          <span>I make the complex simple.</span>
        </motion.p>
        <motion.div
          className="flex gap-3 flex-col lg:flex-row text-center md:flex-row"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="#"
            className="bg-black text-white p-2 rounded-full items-center gap-1 hover:scale-105 active:scale-95 font-medium transition"
          >
            Hire me
          </Link>
          <Link
            href="/assets/Resume.pdf"
            target="_blank"
            className="flex bg-white p-2
             rounded-full justify-center 
             items-center gap-1 hover:scale-105
              active:scale-95 font-medium transition"
            download={true}
          >
            Download CV <HiDocumentDownload />
          </Link>
          <p>Hire me</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
