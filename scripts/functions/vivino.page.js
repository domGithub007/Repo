import { expect } from "chai";
import VivinoObjects from "../pageObjects/chrome/vivino.object";

class VivinoPage extends VivinoObjects {
  open() {
    browser.waitForLoading();
    browser.url("https://www.vivino.com/");
    browser.waitForLoading();
  }

  applySearch() {
    browser.waitForLoading();
    browser.keys("Enter");
    browser.waitForLoading();
  }

  searchByKeyword() {
    browser.waitForLoading();
    this.searchField.waitForVisible();
    this.searchField.click();
    browser.waitForLoading();
    this.searchField.setValue(searchKeyword);
    browser.waitForLoading();
  }

  validateSuggestiondata() {
    browser.waitForLoading(this.suggestionData);
    browser.pause(5000);
    const dataElements = browser.elements(this.suggestionData.selector).value.length;
    browser.params.suggestionCount = dataElements;
    for(var i=dataElements; i>0; i--) {
      const suggestionText = this.suggestionDataText(i).getText().toLowerCase();
      expect(suggestionText).to.include(searchKeyword)
    }
    browser.waitForLoading();
  }

  validateResultdata() {
    browser.waitForLoading(this.resultData);
    browser.pause(3000);
    const dataElements = browser.elements(this.resultData.selector).value.length;
    for(var i=dataElements; i>0; i--) {
      const resultText = this.resultDataText(i).getText().toLowerCase();
      expect(resultText).to.include(searchKeyword)
    }
    if(browser.params.suggestionCount === 0) expect(this.noresultText.getText()).to.equal("Sorry, we couldn't find any wines matching your keywords")
    browser.waitForLoading();
  }

}

export default new VivinoPage();
