import { getProjectById, getAllProjects } from "../../../lib/api";

const project = ({ project }) => {
  return (
    <div>
      <h1>This is project page {project.title}</h1>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const project = await getProjectById(params.id);

  return { props: { project } };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();

  return {
    paths: projects?.map((project) => `/project/${project.id}`) || [],
    fallback: "blocking",
  };
}

export default project;
