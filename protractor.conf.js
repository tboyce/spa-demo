exports.config = {

    specs: [
        'e2e/features/*.feature'
    ],

    capabilities: {
        'browserName': 'firefox'
    },

    baseUrl: 'http://localhost:63342',

    framework: 'cucumber',

    scriptTimeout: 30000
};