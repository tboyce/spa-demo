exports.config = {

    specs: [
        'e2e/features/*.feature'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:63342',

    framework: 'cucumber',

    onPrepare: function() {
        return browser.get('http://localhost:63342/spa-demo/src/');
    }
};