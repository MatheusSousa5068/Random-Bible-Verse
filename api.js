const axios = require("axios")

const api = axios.create({
  baseURL: "https://bible-api.com",
});

module.exports = api