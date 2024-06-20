const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://test.pro.selfwork.ru'
  },
  viewportWidth: 1536,
  viewportHeight: 960,
});
