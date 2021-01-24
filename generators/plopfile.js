module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Basic component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
      {
        type: "input",
        name: "element",
        message: "Root element",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "templates/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test.tsx",
        templateFile: "templates/test.tsx.hbs",
      },
      {
        type: "append",
        path: "../src/components/index.ts",
        templateFile: "templates/all.tsx.hbs",
      },
    ],
  });
};
