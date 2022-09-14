export default {
  name: "experiences",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "company_name",
      title: "CompanyName",
      type: "string",
    },
    {
      name: "start",
      title: "Start",
      type: "date",
    },
    {
      name: "end",
      title: "End",
      type: "date",
    },
    {
      name: "role",
      title: "Role",
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
