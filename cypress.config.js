const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '14tfh3',
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://web.cartlow.lan',
    requestTimeout:10000,
    screenshotsFolder:'cypress/screenshots',
    videosFolder:'cypress/videos',
    reporter:'mochawesome'
  },
});
