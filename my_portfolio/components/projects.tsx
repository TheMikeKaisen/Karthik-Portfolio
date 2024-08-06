"use client"
import { projectsData } from "@/lib/data";
import useSectionInView from "@/lib/hooks";
import React from "react";
import { Project } from "./project";
import SectionHeading from "./section-heading";

const ProjectPage = () => {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} className=" scroll-mt-40 sm:scroll-mt-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProjectPage;

