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
      initialValue: "",
    },
    {
      name: "tech_stack",
      title: "TechStack",
      type: "array",
      of: [{ name: "stack", title: "Stack", type: "string" }],
    },
  ],
};
