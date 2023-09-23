import React from "react";
import react from "../icons/react.png";
import node from "../icons/nodejs.png";
import mongodb from "../icons/mongodb.png";
import express from "../icons/express.png";
import html from "../icons/html5.png";
import css from "../icons/css3.png";
import boot from "../icons/bootstrap.png";
import js from "../icons/javascript.png";
import twailwind from "../icons/tailwind-css.png";
import jquery from "../icons/jquery.png";
import git from "../icons/git.png";
import github from "../icons/github.png";

const About = () => {
  return (
    <section id="About" className="h-screen">
      <div className="pt-24 pb-16 px-7 lg:pr-96">
        <h1 className="text-2xl font-light">Introduction</h1>
        <h1 className="py-2 text-5xl font-extrabold">Overview.</h1>
        <p className="text-neutral-200">
          I'm a MERN stack developer with expertise in React, Express, MongoDB,
          and Node.js. With a solid grasp of object-oriented concepts and a deep
          understanding of JavaScript, I'm a quick learner who thrives on
          collaboration. I work closely with clients to craft efficient,
          scalable, and user-friendly solutions that address real-world
          challenges. Let's team up to transform your ideas into reality!
        </p>
      </div>
      <div className="flex justify-center gap-10 flex-wrap pb-10">
        <div class="card">
          <div>
            <h1 className="pt-3 font-light">FrontEnd Skills</h1>
            <div className="flex flex-wrap content-center gap-6 justify-evenly h-60">
              <img className="w-14" src={html} alt="html.ico" />
              <img className="w-14" src={css} alt="css.ico" />
              <img className="w-14" src={twailwind} alt="twailwindcss.ico" />
              <img className="w-14" src={boot} alt="bootstrap.ico" />
              <img className="w-14" src={js} alt="js.ico" />
              <img className="w-14" src={jquery} alt="jquery.ico" />
              <img className="w-14" src={react} alt="react.ico" />
            </div>
          </div>
        </div>
        <div class="card">
          <div>
            <h1 className="pt-3 font-light">BackEnd Skills</h1>
            <div className="flex flex-wrap content-center gap-2 justify-evenly h-52">
              <img className="w-14" src={node} alt="nodejs.ico" />
              <img className="w-12" src={express} alt="express.ico" />
              <img className="w-14" src={mongodb} alt="mongodb.ico" />
            </div>
          </div>
        </div>
        <div class="card">
          <div>
            <h1 className="pt-3 font-light">Other Skills</h1>
            <div className="flex flex-wrap content-center justify-evenly h-52">
              <img className="w-14" src={git} alt="git.ico" />
              <img className="w-14" src={github} alt="github.ico" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
