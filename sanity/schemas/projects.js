export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "github",
      title: "Github",
      type: "string",
    },
    {
      name: "site",
      title: "Site",
      type: "string",
    },
    {
      name: "walkthrough",
      title: "Walkthrough",
      type: "string",
      // options: {
      //   accept: "video/mp4",
      // },
    },
    {
      name: "display_order",
      title: "DisplayOrder",
      type: "number",
    },
    {
      name: "tech_stack",
      title: "TechStack",
      type: "array",
      of: [{ name: "stack", title: "Stack", type: "string" }],
    },
  ],
};
