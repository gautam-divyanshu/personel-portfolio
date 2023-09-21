import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed top-0 z-10 flex justify-between w-full p-5 text-white bg-transparent backdrop-blur-md drop-shadow-lg">
        <div className="px-2 sm:pl-16 ">
          <Link to="/">
            <img src="letter-d.png" alt="nav brand.png" className="h-8" />
          </Link>
          {/* img is in assets */}
        </div>
        <div>
          <ul className="flex items-center gap-2 font-thin sm:gap-4 sm:font-light">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <Link to="work">Work</Link>
            </li>
            <div className="pl-4">
              <li><a  href="contact">
                <button class="menu__button">
                  <span>
                    Let's Connect
                  </span>
                </button>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
