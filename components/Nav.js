import Link from "next/link";

const Nav = () => {
  return (
    <div className="min-w-screen pt-10 hidden md:flex">
      <ul className="flex justify-between w-10/12 mx-auto">
        <Link href="/">
          <li className="nav-item">HOME</li>
        </Link>
        <Link href="/projects">
          <li className="nav-item">PROJECTS</li>
        </Link>
        <Link href="/about">
          <li className="nav-item">ABOUT ME</li>
        </Link>
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
      </ul>
    </div>
  );
};

export default Nav;
