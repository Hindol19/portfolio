import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ type, time, place, info }) => {
  const ref = useRef();

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3
          className="capitalize font-bold text-2xl sm:text-xl xs:text-lg dark:text-light"
          target="_blank"
        >
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full dark:text-light/75 md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const expList = [
  {
    type: "High School Graduation",
    time: "2018-2020",
    place: "Holy Home School, Rishra",
    info: "Relevant courses included Pure Science, Computer Science, and Business Studies.",
  },
  {
    type: "Bachelors in Computer Science [Ongoing]",
    time: "2021-present",
    place: "Academy of Technology, Adisaptagram",
    info: "Relevant courses involve Full Stack Developement, Machine Learning, Artificial Intelligence, Software Engineering, etc.",
  },
  {
    type: "Online Coursework",
    time: "2020-present",
    place: "Coursera And Udemy",
    info: "Completed coursework in various topics such as Copywriting, Python, Data Science and Analytics",
  },
];

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          {expList.map((item, index) => {
            return (
              <Details
                key={index}
                type={item.type}
                time={item.time}
                place={item.place}
                info={item.info}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Education;
