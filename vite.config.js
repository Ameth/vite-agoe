import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";

export default defineConfig(({ command, mode }) => {
  const port = 3030;

  console.log(command, mode);
  const env = loadEnv(mode, process.cwd());

  //   console.log(env);

  if (mode === "development") {
    console.log(`${env.VITE_NAME} en modo de desarrollo activado!`);
    return {
      // server: {
      //   port,
      // },
    };
  } else {
    console.log(`${env.VITE_NAME} en modo de producción activado!`);
    return {
      build: {
        // rollupOptions: {
        //   input: {
        //     main: resolve(__dirname, "index.html"),
        //     help: resolve(__dirname, "help", "help.html"),
        //   },
        // },

        lib: {
          entry: resolve(__dirname, "lib", "index.js"),
          name: "lib-demo",
          fileName: (format) => `demo.${format}.js`,
        },
      },
    };
  }
});
