import { getAllProjects } from "../lib/api";

const projects = ({ projects }) => {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <h1>{project.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const projects = await getAllProjects();

  return { props: { projects }, revalidate: 10 };
}

export default projects;
