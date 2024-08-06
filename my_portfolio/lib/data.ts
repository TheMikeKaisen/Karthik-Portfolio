import wordanalyticsImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import flowstateImg from "@/public/projects/flowstateImg.png";
import React from "react";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "St. Xavier's School",
    location: "Jaipur, Rajasthan",
    description:
      "Achieved a 92% score in 10th grade and excelled with 94% in 12th grade, focusing on PCM(Physics, Chemistry and Mathematics) along with IP(Informatics Practices) as elective.",
    icon: React.createElement(MdOutlineSchool),
    date: "2018 - 2022",
  },
  {
    title: "JECRC University",
    location: "Jaipur, Rajasthan",
    description:
      "Currently pursuing a B.Tech in Computer Science and Engineering with a specialization in AI and ML at JECRC University. Achieved an average CGPA of 9 in the first year. Batch - 2026.",
    icon: React.createElement(FaUniversity),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "FlowState",
    description:
        "FlowState is a productivity tool designed to help users manage their tasks and time effectively.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma"],
    imageUrl: flowstateImg
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;