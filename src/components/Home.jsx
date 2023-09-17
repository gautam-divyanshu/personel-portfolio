import React from "react";
import headerImg from "../assets/header-img.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="Home" className="h-screen bg-cover text-white">
      <div className="home pt-20 flex  flex-wrap  justify-center items-center h-screen">
        <div>
          <button className="welcome">
            <h1 className="text-white font-semibold">
              Welcome to my portfolio
            </h1>
          </button>

          <h1 className="typing-demo text-4xl sm:text-6xl w-min font-bold py-4">
            Hey! I'm Divyanshu <br />
            Gautam
          </h1>

          <h1 className="text-2xl md:text-3xl font-semibold">
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
            <img className="w-96 md:w-11/12" src={headerImg} alt="space.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
