import { Given, Then } from "cucumber";
import VivinoPage from "../functions/vivino.page";

Given(/^User goes to vivino home page$/, () => {
  VivinoPage.open();
  browser.refresh();
  browser.waitForLoading();
});

Then(/^User clicks on the search tab$/, () => {
  VivinoPage.applySearch();
});

Then(/^User inputs the search keyword$/, () => {
  VivinoPage.searchByKeyword();
});

Then(/^User validates that the (suggestion fields|search results) contains the search keyword$/, field => {
  if(field==="suggestion fields") VivinoPage.validateSuggestiondata();
  else VivinoPage.validateResultdata();
});
