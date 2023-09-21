import React from "react";
import headerImg from "../assets/header-img.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="Home" className="h-screen bg-cover">
      <div className="flex flex-wrap items-center justify-center h-screen pt-20 home">
        <div>
          <button className="welcome">
            <h1 className="font-semibold text-white">
              Welcome to my portfolio
            </h1>
          </button>

          <h1 className="py-4 text-4xl font-extrabold typing-demo sm:text-6xl w-min">
            Hey! I'm Divyanshu <br />
            Gautam
          </h1>

          <h1 className="text-2xl font-semibold md:text-3xl">
            MERN Stack Developer
          </h1>
        </div>
        <div>
          <motion.div
            initial={{ y: 30 }} // Initial position (above its normal position)
            animate={{ y: -20 }} // Animate to this y position (below its normal position)
            transition={{
              duration: 2, // Duration of each up-and-down cycle
              repeat: Infinity, // Repeat the animation infinitely
              repeatType: "reverse", // Reverse the animation on each repeat
            }}
          >
            <img className="w-96 md:10/12" src={headerImg} alt="space.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
