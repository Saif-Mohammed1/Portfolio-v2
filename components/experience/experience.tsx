"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/section-context";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { setActiveSection } = useActiveSectionContext();
  const { theme } = useTheme();
  useEffect(() => {
    if (inView) {
      setActiveSection("Experience");
    }
  }, [inView]);
  return (
    <section ref={ref} id="experience" className="section">
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
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={date}
              icon={icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{name}</h3>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {desc}
              </p>
              {/* <p>{date}</p> */}
            </VerticalTimelineElement>
            {/* <p>{date}</p> */}
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
