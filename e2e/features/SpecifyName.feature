Feature: Specify Name

  Scenario: Full name is displayed
    When I enter first name of "Tim"
    And I enter last name of "Boyce"
    Then the full name should be "Tim Boyce"