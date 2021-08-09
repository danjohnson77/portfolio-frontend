const fetchAPI = async (query, variables = {}) => {
  const res = await fetch(`${process.env.STRAPI_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
};

export const getAllProjects = async () => {
  const data = await fetchAPI(
    `
      query Projects {
        projects{
          title
        }
      }
      `
  );
  return data?.projects;
};

export async function getProjectById(id) {
  const data = await fetchAPI(
    `
    query Projects($id: String) {
      projects(where: {id: $id}) {
        title
      }
    }
    `,
    {
      variables: {
        id,
      },
    }
  );
  return data?.projects[0];
}
