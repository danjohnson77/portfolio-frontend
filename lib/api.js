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
          id
          subtitle
          mainImage {
            url
          }
        }
      }
      `
  );
  return data?.projects;
};

export async function getProjectById(id) {
  const data = await fetchAPI(
    `query($where: JSON) {
      projects(where: $where) {
        title
        id
        subtitle
        mainImage {
          url
        }
        description
        githubURL
        demoURL
        frontend
        backend
      }
    }
    `,
    {
      where: { id },
    }
  );
  return data?.projects[0];
}
export async function getAbout() {
  const data = await fetchAPI(
    `query About {
      about {
        title,
        body
        aboutImage {
          url
        }
        skillset {
          title
          skills
        }
      }
    }
    `
  );

  return data?.about;
}
