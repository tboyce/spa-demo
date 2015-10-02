Feature: Specify Name

  Scenario: Full name is displayed
    Given I am on the name page
    When I enter first name of "Tim"
    And I enter last name of "Boyce"
    Then the full name should be "Tim Boyce"