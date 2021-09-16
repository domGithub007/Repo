/**
 * Utility functions
 */

const commonUtilities = {
  /**
   * Waits for Loading Indicator to disappear
   */
  waitForLoading: function waitForLoading(waitTime, index = 1, waitForExtraLoad = false, element = null) {
    waitTime = waitTime || browser.options.waitforTimeout;
    let isElementVisible = false;
    try {
      if (waitForExtraLoad) {
        browser.pause(500);
      }
      const isVisible = browser.isVisible(
        "//div[contains(@class,'_1tCT')] | //div[contains(@class,'LoadingIndicator')]"
      );
      if (element != null) {
        isElementVisible = browser.isVisible(element.selector);
      } else {
        isElementVisible = true;
      }
      if (!isVisible && element === null) {
        browser.pause(1000);
      }
      if (isVisible && index * 500 < waitTime) {
        this.waitForLoading(waitTime, index + 1);
      } else if (isVisible && index * 500 >= waitTime) {
        throw new Error(`API keeps loading even after ${waitTime}`);
      } else if (!isVisible && !waitForExtraLoad) {
        this.waitForLoading(waitTime, index, true);
      }
      if (!isElementVisible && index * 500 < waitTime) {
        this.waitForLoading(waitTime, index + 1);
      } else if (!isElementVisible && index * 500 >= waitTime) {
        throw new Error(`Element not visible even after ${waitTime}`);
      }
    } catch (err) {
      console.log(`Wait for Loading failed with error: ${err}`);
      throw err;
    }
  },
};



/**
 * Converts the above object to Custom Command
 */
module.exports = {
  init: function() {
    Object.keys(commonUtilities).forEach(key => {
      browser.addCommand(key, commonUtilities[key]);
    });
  }
};
