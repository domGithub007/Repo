module.exports = {
  baseURL: "https://selenium-release.storage.googleapis.com",
  version: "3.141.59",

  drivers: {
    chrome: {
      version: "93.0.4577.63",
      arch: process.arch,
      baseURL: "https://chromedriver.storage.googleapis.com",
    },

    ie: {
      version: "3.12.0",
      arch: process.arch,
      baseURL: "https://selenium-release.storage.googleapis.com",
    },
  }
};
