exports.config = {

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome',
        version: 'latest',
        platform: 'Windows 10',
        tags: ['examples'],
        name: 'chrome test',
        'public': true,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    }, {
        browserName: 'firefox',
        version: 'latest',
        platform: 'Windows 10',
        tags: ['examples'],
        name: 'firefox test',
        'public': true,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    }, {
        browserName: 'internet explorer',
        version: 'latest',
        platform: 'Windows 10',
        tags: ['examples'],
        name: 'internet explorer test',
        'public': true,
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER
    }],

    /**
     * test configurations
     */
    maxInstances: 10,
    host: 'ondemand.saucelabs.com',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    port: 80,
    logLevel: 'silent',
    sync: false,
    coloredLogs: true,
    waitforTimeout: 10000,
    reporters: ['dot'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    },
    reporterOptions: {
        outputDir: './'
    },
    /**
     * specify test files
     */
    specs: [
        './test/*-test.js'
    ]
};

