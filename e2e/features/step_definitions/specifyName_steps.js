var myStepDefinitionsWrapper = function () {
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    var should = chai.should();
    var page = require('../../pageObjects/namePage');

    this.Given(/^I am on the name page$/, function () {
        return page.load();
    });

    this.When(/^I enter first name of "([^"]*)"$/, function (name) {
        return page.firstName.sendKeys(name);
    });

    this.When(/^I enter last name of "([^"]*)"$/, function (name) {
        return page.lastName.sendKeys(name);
    });

    this.Then(/^the full name should be "([^"]*)"$/, function (name) {
        return page.fullName.should.eventually.eq(name);
    });
};
module.exports = myStepDefinitionsWrapper;