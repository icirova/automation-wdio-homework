const allure = require('allure-commandline')
const fs = require('fs');
const allureTmpDirectory = './allure-results';
const allureReportDirectory = './allure-report';

const { TestScheduler } = require('rxjs/testing')

exports.config = {
    specs: [
        './specs/**/*.js'
    ],
    exclude: [
        './specs/examples/**/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: [
                // '--window-size=1920,1080',
                '--headless',
                '--no-sandbox',
                '--disable-gpu',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-infobars'
            ]
        },
        "moz:firefoxOptions": {
            args: [
                // '-headless'
            ]
        }
    }],
    logLevel: 'error', // trace | debug | info | warn | error | silent
    bail: 0,
    baseUrl: 'https://team8-2022brno.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        'selenium-standalone'
    ],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            addConsoleLogs: true
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onPrepare: () => {
        fs.rmdir(allureTmpDirectory, { recursive: true }, err => {
            if (err) console.log(err);
        });
    },
    onComplete: () => {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate','--clean', allureTmpDirectory, '--output', allureReportDirectory])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                resolve()
            })
        })
    },
    afterTest: ()  =>  {
            browser.takeScreenshot();
      }
}
