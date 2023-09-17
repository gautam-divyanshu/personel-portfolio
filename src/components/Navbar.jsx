import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-5 text-white fixed top-0 w-full bg-transparent backdrop-blur-md drop-shadow-lg">
        <div className="px-2 sm:pl-16 ">
          <a href="#Home"><img src="letter-d.png" alt="nav brand.png" className="h-8"/></a>
          {/* img is in assets */}
        </div>
        <div>
          <ul className="flex gap-4 items-center font-light sm:font-bold">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Work">Work</a>
            </li>
            <div className="pl-4">
              <li>
                <button class="menu__button">
                  <span>
                    <a href="#Contact">Let's Connect</a>
                  </span>
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
