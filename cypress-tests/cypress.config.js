const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // TODO: use 'mochawesome' declaration after issue https://github.com/cypress-io/cypress/issues/4536
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
