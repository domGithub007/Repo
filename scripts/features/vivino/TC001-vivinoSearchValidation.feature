Feature: Nivina search
    Scenario:   Perfom the vivino search

    Given User goes to vivino home page
    And User inputs the search keyword
    And User validates that the suggestion fields contains the search keyword
    And User clicks on the search tab
    And User validates that the search results contains the search keyword
