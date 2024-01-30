"use client";
// import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { emailSender } from "@/lib/action/action";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  //   const [success, setSuccess] = useState<boolean>();
  // const [email, setEmail] = useState("");
  // const [massage, setMassage] = useState("");
  //   const form = useRef();
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     const event = e.target;

  //   };
  return (
    <section id="contact" className="section">
      <motion.h2
        className="title"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Contact Me
      </motion.h2>
      <p className=" text-gray-700 /dark:text-white/80 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:saiff.mohammed1@gmail.com">
          saiff.mohammed1@gmail.com{" "}
        </a>
        or through this form.
      </p>
      <form
        id="emailSender"
        action={async (fromData) => {
          const { error, success } = await emailSender(fromData);

          if (error) {
            console.log("error", error);

            toast.error(error);
            return;
          }

          toast.success(success);
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
          className="bg-black/50 text-white p-2 px-4 rounded-full hover:bg-black/70 flex items-center gap-2"
        >
          Send <FaPaperPlane />
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
