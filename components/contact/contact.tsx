"use client";
// import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { emailSender } from "@/lib/action/action";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/section-context";
import { useEffect, useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState<boolean>(false);
  // const [email, setEmail] = useState("");
  // const [massage, setMassage] = useState("");
  //   const form = useRef();
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     const event = e.target;

  //   };
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Contact");
    }
  }, [inView]);
  return (
    <section ref={ref} id="contact" className="section">
      <motion.h2
        className="title"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Contact Me
      </motion.h2>
      <p className=" text-gray-700 dark:text-white/80 text-center ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:saiff.mohammed1@gmail.com">
          saiff.mohammed1@gmail.com{" "}
        </a>
        or through this form.
      </p>
      <form
        id="emailSender"
        action={async (fromData) => {
          setLoading(true);

          try {
            const { error, success } = await emailSender(fromData);
            if (error) {
              // console.log("error", error);
              throw new Error(error);
            }
            toast.success(success);
          } catch (error: any) {
            toast.error(error.message || "An error occurred");
          } finally {
            setLoading(false);
          }
        }}
      >
        <input
          className="input"
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          // onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          // onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="input h-[200px] resize-none"
          required
          name="message"
          placeholder="Enter Your message....."
          // onChange={(e) => setMassage(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-black/50 text-white p-2 
          px-4 rounded-full hover:bg-black/70 
          group outline-none dark:text-gray-300
          dark:hover:bg-black/90 "
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 border-[3px]  rounded-full border-white border-b-transparent"
              viewBox="0 0 24 24"
            ></svg>
          ) : (
            <span className="flex items-center gap-2 ">
              Send
              <FaPaperPlane className="group-hover:ml-1 group-hover:-mt-2" />
            </span>
          )}
        </button>
      </form>

      {/* {success && (
        <p style={{ color: "red", fontStyle: "italic" }}>
          Succeed to send the message....
        </p>
      )}
      {success === false && (
        <p style={{ color: "red", fontStyle: "italic" }}>
          failed to send the message please try again later....
        </p>
      )} */}
    </section>
  );
};

export default Contact;
