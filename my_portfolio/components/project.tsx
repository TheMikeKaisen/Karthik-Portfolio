"use client";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type projectProps = (typeof projectsData)[number];

export function Project({ title, description, tags, imageUrl }: projectProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
    ref={ref}
    style={{
        opacity: opacityProgress, 
        scale: scaleProgress
    }}
        className="sm:mb-8 last:mb-0 group "
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/5">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold dark:text-gray-200">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-400">{description}</p>
          <ul className="flex gap-2 flex-wrap mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/70 rounded-full px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-gray-700/50"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project"
          quality={"90"}
          className="absolute sm:-right-40 -right-60 top-8 w-[28.25rem] hidden sm:block rounded-lg shadow-2xl group-even:right-[initial] group-even:-left-40
        transition
        group-hover:-translate-x-3
        group-hover:translate-y-3 group-hover:-rotate-3
        group-hover:scale-[1.04]

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3 group-even:group-hover:rotate-3
        "
        />
      </section>
    </motion.div>
  );
}
