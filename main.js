import "./style.css";
import btnStyles from "./button.module.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";
import { user } from "./data.json";
import suma from "./suma.ts";

// console.log(`Suma de 2 + 3 = ${suma(2, 3)}`);

const modules = import.meta.glob("./modules//*.js");

// console.log(modules);

for (const path in modules) {
  //Retorna una promesa
  modules[path]().then((module) => {
    module.load();
  });

  //Usando async-await
  // async function fetchModule() {
  //   const module = await modules[path]();
  //   module.load();
  // }

  // fetchModule();

  //Usando top-level await
  // const module = await modules[path]();
  // module.load();
}

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hola Ameth!</h1>
    <h2>${import.meta.env.VITE_NAME}</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      <a href="https://es.vitejs.dev" target="_blank" class="link">Click on the Vite logo to learn more</a>
    </p>
    <pre>${JSON.stringify(user)}</pre>
  </div>
`;

document.querySelector("#counter").className = btnStyles.btn;

setupCounter(document.querySelector("#counter"));
