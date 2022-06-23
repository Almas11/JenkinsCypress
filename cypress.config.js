const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '14tfh3',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.cartlow.com',
    requestTimeout:10000,
    screenshotsFolder:'cypress/screenshots',
    videosFolder:'cypress/videos',
    reporter:'mochawesome'
  },
});
