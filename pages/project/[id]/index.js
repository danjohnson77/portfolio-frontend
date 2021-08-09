import { useRouter } from "next/router";

const project = ({ project }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>This is project page {id}</h1>
    </div>
  );
};

export default project;
