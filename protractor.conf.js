exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:9000/',

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    },
    capabilities: {
        browserName: 'chrome'
    },
    //specs: ['e2e/sample.e2e-spec.js']
    specs: ['e2e/myFirstController.e2e-spec.js']
};
