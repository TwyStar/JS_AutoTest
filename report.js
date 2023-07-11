const reporter = require("cucumber-html-reporter");
const moment = require('moment');
const currentDatetime = moment().format('YYYY-MM-DD_HH-mm-ss');
const reportFilename = `cucumber_report_${currentDatetime}.html`;


const options = {
    theme: 'bootstrap',
    jsonFile: 'cucumber-report.json',
    output: `Report/${reportFilename}`,
    reportSuiteAsScenaros: true,
    launchReport: false,
    metadata: {
        'App Verison': '1.0.0',
        'Browser': 'Chrome/114.0.5735.133',
        'Platform': 'Windows 11',
        'Creator': 'Zoltán Balaska',
        'Repo': 'https://github.com/TwyStar/JS_AutoTest'
    }
}
reporter.generate(options)