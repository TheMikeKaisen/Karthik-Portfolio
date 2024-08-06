"use client"

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { animate, motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
        y: 100, 
        opacity: 0
    }, 
    animate: (index: number) => ({
        opacity:1, 
        y:0, 
        transition: {
            delay: 0.05 * index
        }
    })
}

const Skills = () => {
  return (
    <section className="max-w-[53rem]">
      <SectionHeading>Skills</SectionHeading>

      <ul className="flex flex-wrap  gap-2 text-lg justify-center text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/10 py-3 px-5 rounded-xl"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
