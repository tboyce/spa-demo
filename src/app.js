var app = angular.module('app', []);

app.controller('MainController', function() {
    this.firstName = '';
    this.lastName = '';

    this.fullName = function() {
        return [this.firstName, this.lastName].join(' ');
    }
});