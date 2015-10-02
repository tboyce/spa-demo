exports.config = {

    specs: [
        'e2e/features/*.feature'
    ],

    capabilities: {
        'browserName': 'firefox'
    },

    baseUrl: 'http://localhost:63342/spa-demo/src',

    framework: 'cucumber'

};