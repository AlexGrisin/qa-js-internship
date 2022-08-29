const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: '../../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    toConsole: true,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
