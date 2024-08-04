import { projectsData } from "@/lib/data";
import React from "react";
import { Project } from "./project";
import SectionHeading from "./section-heading";

const ProjectPage = () => {
  return (
    <section >
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

