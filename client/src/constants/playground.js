const stack = [
  {
    name: "NodeJs",
    address: "NodeJsadd",
  },
  {
    name: "ExpressJs",
    address: "NodeJsadd",
  },
  {
    name: "Git",
    address: "Git",
  },
  {
    name: "Javascript",
    address: "JavaScriptadd",
  },
  {
    name: "Typescript",
    address: "Typescriptadd",
  },
  {
    name: "ReactJs",
    address: "ReactJsadd",
  },
  {
    name: "MongoDB",
    address: "Mongoadd",
  },
];

console.log(stack.find((element) => element.name === "ReactJs"));
