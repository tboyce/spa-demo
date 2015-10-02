module.exports = {
    load: function () {
        return browser.get('/');
    },
    firstName: element(by.model('firstName')),
    lastName: element(by.model('lastName')),
    fullName: element(by.binding('fullName()')).getText()
};