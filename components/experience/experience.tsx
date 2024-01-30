"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { Fragment } from "react";
import { backInOut } from "framer-motion/dom";

const Experience = () => {
  return (
    <section id=" experience" className="section">
      <motion.h2
        className="title"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Experience
      </motion.h2>
      <VerticalTimeline lineColor="">
        {experiencesData.map(({ name, desc, date, icon = "" }, inx) => (
          <Fragment key={inx}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid #9ca3af" }}
              date={date}
              icon={icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{name}</h3>
              <p className="text-gray-600">{desc}</p>
              {/* <p>{date}</p> */}
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
