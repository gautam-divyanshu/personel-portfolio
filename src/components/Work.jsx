import React from "react";
import webImg from "../assets/web project.jpg";
import ProjectCard from "./ProjectCard";
import youtube from "../projects/youtube clone.mp4";

const Work = () => {
  return (
    <section id="Work" className="h-screen">
      <div className="pt-20 pb-12 pl-20 pr-48">
        <h1 className="py-2 text-5xl font-extrabold">Projects.</h1>
      </div>
      <div className="flex flex-wrap gap-10 px-3 py-5 justify-evenly basis-96">
        <ProjectCard
          video={youtube}
          img={webImg}
          title="project1"
          info="Web-based platform that allows users to search, book, and manage
          car rentals from various providers, providing a convenient and
          efficient solution for transportation needs."
        />
        <ProjectCard
          video={youtube}
          img={webImg}
          title="project1"
          info="Web-based platform that allows users to search, book, and manage
          car rentals from various providers, providing a convenient and
          efficient solution for transportation needs."
        />
        <ProjectCard
          video={youtube}
          img={webImg}
          title="project1"
          info="Web-based platform that allows users to search, book, and manage
          car rentals from various providers, providing a convenient and
          efficient solution for transportation needs."
        />
        <ProjectCard
          video={youtube}
          img={webImg}
          title="project1"
          info="Web-based platform that allows users to search, book, and manage
          car rentals from various providers, providing a convenient and
          efficient solution for transportation needs."
        />
      </div>
    </section>
  );
};

export default Work;
