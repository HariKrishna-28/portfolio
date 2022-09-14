export default {
  name: "open_source",
  title: "OpenSource",
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
      name: "npm",
      title: "Npm",
      type: "string",
    },
    {
      name: "tech_stack",
      title: "TechStack",
      type: "array",
      of: [{ name: "stack", title: "Stack", type: "string" }],
    },
  ],
};
