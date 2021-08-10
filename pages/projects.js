import { getAllProjects } from "../lib/api";
import Image from "next/image";
import Link from "next/link";
import SpacedText from "../components/SpacedText";

const projects = ({ projects }) => {
  return (
    <div className="panel p-10 tracking-widest md:w-10/12">
      <SpacedText text="PROJECTS" classes="pb-10" />
      <div className="flex flex-col w-full">
        {projects.map((project, index) => {
          const { title, subtitle, mainImage, id } = project;

          return (
            <Link href={`/project/${id}`} key={index}>
              <div className="flex w-full mb-10">
                <div className="flex relative w-3/12 h-24">
                  <Image
                    src={mainImage.url}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="flex flex-col font-subheading text-lg w-9/12 justify-center items-center">
                  <h2>{title}</h2>
                  <p className="text-sm">{subtitle}</p>
                </div>
              </div>
            </Link>
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
