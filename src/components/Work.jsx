import React from "react";
import ProjectCard from "./ProjectCard";
import blogApp from "../projects/blog app.mp4";
import youtube from "../projects/youtube clone.mp4";
import unsplash from "../projects/unsplash clone.mp4";
import SpaceTour from "../projects/SpaceTour.mp4";

const Work = () => {
  return (
    <section id="Work" className="h-screen">
      <div className="pt-20 pb-12 pl-20 pr-48">
        <h1 className="py-2 text-5xl font-extrabold">Projects.</h1>
      </div>
      <div className="flex flex-wrap gap-10 px-3 py-5 justify-evenly basis-96">
        <ProjectCard
          video={blogApp}
          title="Blog app"
          info="Mern stack project with cookies and session."
          tech="#MongoDB #Express #Node #React #Axios"
          gitLink="https://github.com/gautam-divyanshu/blogApp_react"
        />
        <ProjectCard
          video={youtube}
          title="Youtube Clone"
          info="Built with youtube api."
          tech="#react #youtube-api #axios"
          gitLink="https://github.com/gautam-divyanshu/youtube-clone-React.Js"
        />
        <ProjectCard
          video={unsplash}
          title="Image Search App"
          info="Built with Unsplash api."
          tech="#HTML #CSS #JavaScript #EJS"
          gitLink="https://github.com/gautam-divyanshu/image-search-app"
        />
        <ProjectCard
          video={SpaceTour}
          title="Space Tourism Website"
          info="FrontEnd website."
          tech="#HTML #CSS #JavaScript"
          gitLink="https://github.com/gautam-divyanshu/Space-tourism"
        />
      </div>
    </section>
  );
};

export default Work;
