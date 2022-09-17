import { urlFor, client } from "../client";

export default GETCONTRIBUTIONS = () => {
  const query = '*[type == "open_source"]';
  return client.fetch(query);
};
