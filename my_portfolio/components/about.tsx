import SectionHeading from "./section-heading";

const About = () => {
  return (
    <section className="mb:28 sm:mb-40 max-w-[45rem] text-center leading-8 ">
      <SectionHeading>about me</SectionHeading>
      <div className="flex flex-col gap-5  font-medium">
        {/* me */}
        <p>
          Hey there! I'm Karthik, a web developer and third-year computer
          science student from the vibrant city of Jaipur, India 🇮🇳. I'm on a
          mission to craft awesome digital experiences that make people go
          "Wow!"
        </p>

        {/* mern and nextjs */}
        <p>
          I'm all about the <strong>MERN stack</strong> (MongoDB, Express.js,
          React, Node.js), and I've got a special love affair with{" "}
          <strong>Next.js</strong> and <strong>TypeScript</strong>. When I'm not
          coding, you'll find me wireframing in <strong>Figma</strong> or
          geeking out over the latest web technologies.
        </p>

        {/* technologies */}
        <div>
          <p className="text-lg font-bold">My tech playground </p>
          <ul>
            <li>Front-end: React, Next.js, TypeScript</li>
            <li>Back-end: Node.js, Express.js</li>
            <li>Database: MongoDB, Prisma, Postgres</li>
            <li>Authentication: Auth0, Clerk</li>
            <li>Design: Figma</li>
          </ul>
        </div>

        {/* fun fact */}
        <p>
          Fun fact: I once debugged code for 7 hours straight and still loved
          every minute of it! 🤓
        </p>

        <p>
          When I'm not building the web, I'm probably creating content, sharing
          insights, or discussing tech trends with fellow developers. I believe
          in the power of community and continuous learning.
        </p>

        <p>
          Want to see what I can do? Check out my projects below or let's
          connect and chat about how we can create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
