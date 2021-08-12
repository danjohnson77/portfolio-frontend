import Link from "next/link";
import { useState } from "react";
import gsap from "gsap";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    gsap.from(".nav-item", {
      duration: 0.2,

      opacity: 0,
    });
    setOpen(!open);
  };
  return (
    <nav className="md:pt-10">
      <div
        className="flex justify-between h-5 fixed flex-col z-50 md:hidden m-3 cursor-pointer"
        onClick={handleClick}
      >
        <div className="h-px bg-white w-10"></div>
        <div className="h-px bg-white w-10"></div>
        <div className="h-px bg-white w-10"></div>
      </div>

      <div
        className={`w-screen fixed md:relative min-h-screen md:min-h-0 z-20 bg-black md:bg-transparent justify-center flex ${
          !open && "hidden md:flex"
        }`}
        onClick={() => setOpen(false)}
      >
        <ul className="flex justify-between flex-col w-full md:flex-row md:w-10/12 items-center">
          <Link href="/">
            <li className="nav-item">HOME</li>
          </Link>
          <Link href="/projects">
            <li className="nav-item">PROJECTS</li>
          </Link>
          <Link href="/about">
            <li className="nav-item">ABOUT ME</li>
          </Link>
          <div className="flex flex-row justify-between w-36">
            <a href="https://github.com/danjohnson77" target="_blank">
              <li className="nav-item">
                <i className="fab fa-github"></i>
              </li>
            </a>
            <a href="https://www.linkedin.com/in/danjohnson77/" target="_blank">
              <li className="nav-item">
                <i className="fab fa-linkedin"></i>
              </li>
            </a>
            <a href="https://www.twitter.com/dfjdeveloper" target="_blank">
              <li className="nav-item">
                <i className="fab fa-twitter"></i>
              </li>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
