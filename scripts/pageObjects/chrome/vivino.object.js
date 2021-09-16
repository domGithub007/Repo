export default class VivinoObjects {
  
  get searchField() {
    return browser.element("(//form[contains(@class,'search')]//input)[1]");
  }

  get suggestionData() {
    return browser.element("//div[contains(@class,'searchResults__resultList')]//a");
  }

  suggestionDataText(index) {
    return browser.element(`((//div[contains(@class,'searchResults__resultList')]//a)[${index}]//div)[2]`);
  }

  get resultData() {
    return browser.element("//div[@class='wine-card__content']");
  }

  resultDataText(index) {
    return browser.element(`(//div[@class="wine-card__content"]//div[@class="wine-card__header-wrapper"])[${index}]`);
  }

  get noresultText() {
    return browser.element(`//div[@class="alert alert-warning text-center"]`);
  }
}
