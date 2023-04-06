module.exports = function (plop) {
  plop.setGenerator("section", {
    description: "Criando uma nova seção na página...",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Nome da seção: ",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/html/{{dashCase name}}/index.html",
        templateFile: "plop-templates/section.html.hbs",
      },
      {
        type: "add",
        path: "src/html/{{dashCase name}}/scripts.ts",
        templateFile: "plop-templates/section.ts.hbs",
      },
      {
        type: "add",
        path: "src/html/{{dashCase name}}/style.scss",
        templateFile: "plop-templates/section.scss.hbs",
      },
    ],
  })
}
