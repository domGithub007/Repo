/* eslint-disable import/no-dynamic-require */
/**
 *
 * wdio.conf.chrome.js
 * Test configuration file used for iOS test environment
 * It uses Chrome with iPhone 6 mobileEmulation
 *
 */
const merge = require("deepmerge");
const wdioConfBase = require("./wdio.conf.base.js");
const utils = require("../utilities/util");

const browserCapabilities = [];

browserCapabilities.push({
  browserName: "chrome",
  applicationName: "common",
  "goog:chromeOptions": {
    w3c: false,
    args: ["--reduce-security-for-testing", "--start-maximized"]
  }
});

exports.config = merge(wdioConfBase.config, {
  /**
   ============
   Capabilities
   ============
   Define your capabilities here. WebdriverIO can run multiple capabilities at the same
   time. Depending on the number of capabilities, WebdriverIO launches several test
   sessions. Within your capabilities you can overwrite the spec and exclude options in
   order to group specific specs to a specific capability.
   */

  capabilities: browserCapabilities,

  host: process.env.GRIDHOST || "localhost",
  port: process.env.GRIDPORT || 4444,
  path: "/wd/hub",
  protocol: "http",
  maxInstances: process.env.instance || 2,

  /**
   Gets executed before test execution begins. At this point you can access all global
   variables, such as `browser`. It is the perfect place to define custom commands.
   */
  before: function(capabilities, specs) {
    /**
     * Setup the Chai assertion framework
     */
    utils.init();
    console.log("Starting Test Case: -", specs[0].replace(/^.*[\\\/]/, "")); // eslint-disable-line no-useless-escape
    browser.timeouts("page load", 150000);
    this.params = [];
    browser.params = this.params;
    global.searchKeyword = process.env.KEYWORD || "apple";
  }
});
