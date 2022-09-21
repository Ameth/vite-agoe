import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const port = 3030;

  console.log(command, mode);
  const env = loadEnv(mode, process.cwd());

  //   console.log(env);

  if (mode === "development") {
    console.log(`${env.VITE_NAME} en modo de desarrollo activado!`);
  } else {
    console.log(`${env.VITE_NAME} en modo de producción activado!`);
  }

  return {
    // server: {
    //   port,
    // },
  };
});
