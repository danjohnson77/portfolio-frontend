import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    const tl = gsap.timeline({ repeat: 0 });
    const duration = 0.4;

    if (!open) {
      tl.to(".nav-line-top", { duration, top: "50%", rotate: 405 });
      tl.to(".nav-line-bottom", { duration, top: "50%", rotate: 315 }, 0);
      tl.to(".nav-line-middle", { duration, autoAlpha: 0 }, 0);
    } else {
      tl.to(".nav-line-top", { duration, rotate: 0 });
      tl.to(".nav-line-bottom", { duration, rotate: 0 }, 0);
      tl.to(".nav-line-middle", { duration, autoAlpha: 1 }, 0);

      tl.add("end", 0.3);

      tl.to(".nav-line-top", { top: 0 }, "end");
      tl.to(".nav-line-bottom", { top: "100%" }, "end");
    }

    gsap.from(".nav-item", {
      duration: 0.2,

      opacity: 0,
    });
    setOpen(!open);
  };

  return (
    <nav className="md:pt-10">
      <div
        className="flex fixed flex-col z-50 md:hidden m-3 cursor-pointer w-10 justify-center"
        onClick={handleClick}
      >
        <div className={`nav-box`}>
          <div className={`nav-line nav-line-top`}></div>
          <div className={`nav-line nav-line-middle top-1/2`}></div>
          <div className={`nav-line nav-line-bottom top-full`}></div>
        </div>
      </div>

      <div
        className={`w-screen md:w-full fixed md:relative min-h-screen md:min-h-0 z-20 bg-black md:bg-transparent justify-center flex ${
          !open && "hidden md:flex"
        }`}
        onClick={() => handleClick()}
      >
        <ul className="flex justify-between flex-col w-full md:flex-row md:w-10/12 items-center">
          <Link href="/">
            <li className={`nav-item ${router.asPath === "/" && "text-glow"}`}>
              HOME
            </li>
          </Link>
          <Link href="/projects">
            <li
              className={`nav-item ${
                router.asPath === "/projects" && "text-glow"
              }`}
            >
              PROJECTS
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`nav-item ${
                router.asPath === "/about" && "text-glow"
              }`}
            >
              ABOUT ME
            </li>
          </Link>
          <div className="flex flex-row justify-between w-36">
            <a
              href="https://github.com/danjohnson77"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Link"
            >
              <li className="nav-item">
                <i className="fab fa-github"></i>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/danjohnson77/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linked In Link"
            >
              <li className="nav-item">
                <i className="fab fa-linkedin"></i>
              </li>
            </a>
            <a
              href="https://www.twitter.com/dfjdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Link"
            >
              <li className="nav-item">
                <i className="fab fa-twitter"></i>
              </li>
            </a>
            <a
              href={`mailto:${process.env.CONTACT_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Me Link"
            >
              <li className="nav-item">
                <i className="fas fa-envelope-open-text"></i>
              </li>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
