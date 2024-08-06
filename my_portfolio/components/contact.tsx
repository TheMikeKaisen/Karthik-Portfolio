"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import sendEmail from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitButton from "./submit-btn";
import toast from "react-hot-toast";

const Contact =  () => {
  const { ref } = useSectionInView("Contact", 0.1);
  const { pending } = useFormStatus();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-gray-500">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:h.karthiknair@gmail.com">
          h.karthiknair@gmail.com
        </a>
        {" "}or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!")
        }}
      >
        <input
          type="email"
          className="h-14 outline-none rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          maxLength={500}
          name="message"
          required
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
};

export default Contact;
