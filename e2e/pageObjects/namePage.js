module.exports = {
    load: function () {
        return browser.get('spa-demo/src/#/');
    },
    firstName: element(by.model('vm.firstName')),
    lastName: element(by.model('vm.lastName')),
    fullName: element(by.binding('vm.fullName()')).getText()
};