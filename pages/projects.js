import axios from "axios";

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

export async function getServerSideProps() {
  const res = await axios.get(
    `${
      process.env.NODE_ENV === "development" && "http://localhost:3000"
    }/api/projects`
  );
  const projects = res.data;

  return { props: { projects } };
}

export default projects;
