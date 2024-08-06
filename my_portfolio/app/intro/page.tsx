"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import useSectionInView from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const IntroPage = () => {
  const {ref} = useSectionInView("Home", 0.5)

  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-40 sm:scroll-mt-28"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src="/images/MePicPortfolio.png"
              width={192}
              height={192}
              alt="Karthik's Portrait"
              quality={"80"}
              priority={true}
              className="h-36 w-36 object-cover rounded-full border-[0.35rem] border-white shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Intro Paragraph */}

      <motion.h1
        className="mt-5 mb-10 px-4 text-lg font-medium !leading-[1.5] sm:text-xl"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <strong>Hi, I'm Karthik H!</strong> I'm a passionate{" "}
        <strong>web developer</strong> specializing in the{" "}
        <strong>MERN stack</strong> and <strong>Next.js</strong>. Currently in
        my 3rd year of college, I'm actively building innovative web solutions
        and engaging with the tech community. Welcome to my portfolio!
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-2 justify-center font-medium text-lg px-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Contact Button */}
        <Link
          href={"#contact"}
          className="group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:scale-110 transition active:scale-105"
          onClick={() => {
            setActiveSection("Contact")
            setTimeOfLastClick(Date.now())
          }}
        >
          Contact Me
          <BsArrowRight className="group-hover:translate-x-1.5 transition opacity-70" />
        </Link>

        {/* Download Resume */}
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none  hover:scale-110 transition active:scale-105 cursor-pointer borderBlack"
          href="/resume/karthik_fullstack_resume.pdf"
          download={true}
        >
          Download Resume
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>

        {/* LinkedIn */}
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none  hover:scale-[1.15] transition active:scale-105 borderBlack"
          href={"https://www.linkedin.com/in/karthik-h-nair/"}
          target="_blank"
        >
          <BsLinkedin />
        </a>

        {/* Github */}
        <a
          className="bg-white p-4 text-[1.35rem] text-gray-700 flex items-center gap-2 rounded-full outline-none  hover:scale-[1.15]  transition active:scale-105 borderBlack"
          href={"https://github.com/TheMikeKaisen"}
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default IntroPage;
