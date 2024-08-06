"use client";
import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useSectionInView("About", 0.6);

  return (
    <motion.section
      ref={ref}
      className="mb-28 sm:mb-40 max-w-[45rem] text-center leading-8 scroll-mt-40 sm:scroll-mt-28"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
      id="about"
    >
      <SectionHeading>about me</SectionHeading>
      <div className="flex flex-col gap-6 font-medium text-gray-600 dark:text-gray-200">
  {/* Introduction */}
  <p className="text-lg">
    Hey there! I'm <span className="font-bold">Karthik</span>, a web developer and third-year computer science student from the vibrant city of Jaipur, India 🇮🇳. I'm on a mission to craft awesome digital experiences that make people go "Wow!"
  </p>

  {/* Expertise */}
  <p className="text-lg">
    I specialize in the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js), and have a particular fondness for <strong>Next.js</strong> and <strong>TypeScript</strong>. When I'm not coding, you'll find me wireframing in <strong>Figma</strong> or geeking out over the latest web technologies.
  </p>

  {/* Technologies */}
  <div className="text-lg"> My journey in the tech world is driven by continuous learning and hands-on practice. I actively engage in coding challenges and debugging sessions to sharpen my skills. 
  Additionally, I am proficient in <strong>TypeScript</strong> and <strong>Zod</strong>, ensuring robust type-checking and data validation in my projects.</div>

  

  {/* Community Involvement */}
  <p className="text-lg">
    When I'm not building the web, I'm probably creating content, sharing insights, or discussing tech trends with fellow developers. I believe in the power of community and continuous learning.
  </p>

  {/* Call to Action */}
  <p className="text-lg">
  I am open to full-time opportunities where I can contribute to dynamic projects and collaborate with talented professionals. Let's connect and create something amazing together.
  </p>
</div>

    </motion.section>
  );
};

export default About;
