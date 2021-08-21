import { getProjectById, getAllProjects } from "../../../lib/api";
import Image from "next/image";

const project = ({ project }) => {
  const {
    title,
    subtitle,
    mainImage: { url },
    description,
    githubURL,
    demoURL,
    frontend,
    backend,
  } = project;
  const md = require("markdown-it")();

  return (
    <div className="panel md:w-10/12 font-subheading px-10 md:px-0 md:py-10">
      <div className="py-5 md:py-0">
        <h1 className="text-4xl">{title}</h1>
        <h2 className="text-center text-sm">{subtitle}</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full items-center">
        <div className="flex md:w-6/12 px-5">
          <div className="flex flex-col relative w-full justify-center">
            <div className="text-lg text-center py-5">
              <p>Frontend: {frontend}</p>
              <p>Backend: {backend}</p>
            </div>
            <Image src={url} layout="responsive" width="16" height="9" />
            <div className="flex text-lg w-full justify-evenly py-5">
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github Link"
              >
                GITHUB REPO
              </a>
              <div className="w-px bg-white"></div>
              <a
                href={demoURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo Link"
              >
                LIVE DEMO
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white h-px w-full md:w-px md:h-96 md:my-5 hidden md:flex"></div>

        <div
          className="flex flex-col items-center py-10 md:w-6/12  md:justify-center md:px-5 text-sm project-body"
          dangerouslySetInnerHTML={{ __html: md.render(description) }}
        ></div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const project = await getProjectById(params.id);

  return { props: { project }, revalidate: 10 };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();

  return {
    paths: projects?.map((project) => `/project/${project.id}`) || [],
    fallback: "blocking",
  };
}

export default project;
