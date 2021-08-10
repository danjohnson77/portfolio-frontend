import { getAllProjects } from "../lib/api";
import Image from "next/image";
import Link from "next/link";
import SpacedText from "../components/SpacedText";

const projects = ({ projects }) => {
  let count = projects.length;

  return (
    <div className="panel p-10 tracking-widest md:w-10/12">
      <SpacedText text="PROJECTS" classes="pb-10" />
      <div className="flex flex-col w-full">
        {projects.map((project, index) => {
          const { title, subtitle, mainImage, id } = project;

          return (
            <div key={index}>
              <Link href={`/project/${id}`}>
                <div className="flex flex-col w-full md:flex-row py-10 hover-glow">
                  <div className="flex relative h-64 md:w-6/12 hover-glow-item">
                    <Image
                      src={mainImage.url}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col font-subheading text-lg  justify-center text-center md:px-10 md:w-6/12 ">
                    <h2 className="hover-glow-text">{title}</h2>
                    <p className="text-sm  hover-glow-text">{subtitle}</p>
                  </div>
                </div>
              </Link>
              {index < count - 1 && (
                <div className="h-px bg-white w-full mx-auto my-10 bg-opacity-50"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const projects = await getAllProjects();

  return { props: { projects }, revalidate: 10 };
}

export default projects;
