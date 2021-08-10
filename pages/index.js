import Link from "next/link";
import SpacedText from "../components/SpacedText";

export default function Home() {
  return (
    <div className="panel md:text-6xl md:w-10/12 w-full min-h-screen md:min-h-0 pt-24 px-10 md:p-10">
      <SpacedText text="DANIEL" classes="pb-10 md:w-10/12 mx-auto" />
      <SpacedText text="JOHNSON" classes="md:w-10/12 mx-auto" />

      <div className="flex font-subheading justify-between text-3xl py-10 tracking-widest w-full md:w-10/12 mx-auto flex-col md:flex-row">
        <SpacedText text="FULL-STACK " />

        <SpacedText text="WEB DEVELOPER" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full lg:flex text-4xl font-subheading lg:w-10/12 justify-between">
        <Link href="/projects">
          <div className="nav-item-landing">
            <i className="fas fa-code"></i>
            <p className="text-sm">PROJECTS</p>
          </div>
        </Link>
        <Link href="/about">
          <div className="nav-item-landing">
            <i className="fas fa-user"></i>
            <p className="text-sm">ABOUT ME</p>
          </div>
        </Link>
        <a href="https://github.com/danjohnson77" target="_blank">
          <div className="nav-item-landing">
            <i className="fab fa-github"></i>
            <p className="text-sm">GITHUB</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/danjohnson77/" target="_blank">
          <div className="nav-item-landing">
            <i className="fab fa-linkedin"></i>
            <p className="text-sm">LINKEDIN</p>
          </div>
        </a>
        <a href="https://www.twitter.com/dfjdeveloper" target="_blank">
          <div className="nav-item-landing">
            <i className="fab fa-twitter"></i>
            <p className="text-sm">TWITTER</p>
          </div>
        </a>
        <div className="nav-item-landing">
          <i className="fas fa-envelope-open-text"></i>
          <p className="text-sm">CONTACT</p>
        </div>
      </div>
    </div>
  );
}
