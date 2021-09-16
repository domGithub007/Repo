const url = "https://www.vivino.com/";

const reportTitle = `Vivino ${process.env.FEATURE}`;


exports.config = {
  /**
   Default timeout for all waitFor* commands.
   */
  waitforTimeout: 120000,

  /**
   Default timeout in milliseconds for request if Selenium Grid doesn"t send response
   */
  connectionRetryTimeout: 120000,

  /**
   Default request retries count
   */
  connectionRetryCount: 3,

  /**
   Test reporter for stdout.
   The only one supported by default is "dot"
   see also: http://webdriver.io/guide/testrunner/reporters.html
   */
  // reporters: ["spec", "html-format", "dot","@rpii/wdio-html-reporter"],

  reporters: ["spec", "html-advance", "dot", "json"],

  /**
   Set a base URL in order to shorten url command calls. If your url parameter starts
   with "/", then the base url gets prepended.
   */
  baseUrl: process.env.BASEURL || url,


  /**
   Some reporter require additional information which should get defined here
   */
  reporterOptions: {
    outputDir: "outputDir",
    htmlFormat: {
      outputDir: process.env.DIR,
      reportTitle: `${reportTitle || "report"}`
    },
    json: {
      outputDir: `./reports/json-reports/${process.env.FEATURE}`,
      filename: "report",
      combined: true
    }
  },

  /**
   Framework you want to run your specs with.
   The following are supported: Mocha, Jasmine, and Cucumber
   see also: http://webdriver.io/guide/testrunner/frameworks.html
   */
  framework: "cucumber",

  cucumberOpts: {
    require: ["./scripts/step_definitions/*.stepDefinition.js"],
    compiler: ["js:babel-core/register"], // <string[]> filetype:compiler used for processing required features
    failFast: true,
    dryRun: false,
    colors: true,
    timeout: 720000
  },

  // settings in case elements are taking some time to appear
  before: function() {
    browser.timeouts("implicit", 30 * 10);
    browser.timeouts("pageLoad", 30 * 1000);
  }
};
