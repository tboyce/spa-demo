module.exports = {
    load: function () {
        return browser.get('spa-demo/src/#/');
    },
    firstName: element(by.model('firstName')),
    lastName: element(by.model('lastName')),
    fullName: element(by.binding('fullName()')).getText()
};