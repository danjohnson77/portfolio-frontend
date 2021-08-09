import axios from "axios";

export default async (req, res) => {
  try {
    const projReq = await axios.get(`${process.env.STRAPI_API_URL}/projects`);
    res.status(200).json(projReq.data);
  } catch (error) {
    res.error(error);
  }
};
