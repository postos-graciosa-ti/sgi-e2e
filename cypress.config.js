import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://sgi-front-staging.onrender.com",
    chromeWebSecurity: false, // Adicionando a configuração aqui
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
