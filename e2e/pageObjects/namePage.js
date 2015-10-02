module.exports = {
    firstName: element(By.model('vm.firstName')),
    lastName: element(By.model('vm.lastName')),
    fullName: element(By.binding('vm.fullName()')).getText()
};