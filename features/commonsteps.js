const { Given, When, Then } = require("cucumber");
const PuppeteerHelper = require('./support/puppeteerhelper');
const moment = require('moment');
const textFSelectors = require("./support/AETEST/selectors/textFSelectors");
const buttonSelectors = require("./support/AETEST/selectors/buttonSelectors");

const currentDatetime = moment().format('YYYY-MM-DD HH:mm:ss');

const screenshotName = `puppeteer_screenshot_${currentDatetime}.png`;

function openBrowser() {
    Given("Launch new browser and open ITERAURL", async function () {
        await PuppeteerHelper.page.goto(process.env.ITERAURL)
        //const bv = await PuppeteerHelper.browser.version()
        //console.log(bv)

    });
}

function openBrowserAE() {
    Given("Launch new browser and open AEURL", async function () {
        await PuppeteerHelper.page.goto(process.env.AEURL)
    })
}

function verifysite() {
    Then("Verify that home page is visible successfully", async function () {
        const title = "Automation Exercise";
        const actualtitle = await PuppeteerHelper.page.title();

        if (!title === actualtitle) {
            PuppeteerHelper.closeBrowser();
        }
    })
}

function closeBrowser() {
    When("Close Browser", async function () {
        await PuppeteerHelper.browser.close();

    });
}

async function alreadyExistMail() {
    await PuppeteerHelper.page.type(textFSelectors.login.emailTextF, "Tesztelek@tesztelek.com");
    await PuppeteerHelper.page.type(textFSelectors.login.passTextF, "TesztElek1");
    await PuppeteerHelper.page.click(buttonSelectors.login.loginBtn);

    const text = "Logged in as";
    const content = await PuppeteerHelper.page.content();

    if (text === content) {
        await PuppeteerHelper.page.click(buttonSelectors.delete_account);
        await PuppeteerHelper.page.click(buttonSelectors.login);
    } else {
        await PuppeteerHelper.page.type(textFSelectors.login.emailTextF, "Tesztelek@tesztelek1.com");
        await PuppeteerHelper.page.type(textFSelectors.login.passTextF, "TesztElek2");
        await PuppeteerHelper.page.click(buttonSelectors.loginFrom.loginBtn);
        await PuppeteerHelper.page.click(buttonSelectors.delete_account);
        await PuppeteerHelper.page.click(buttonSelectors.login);
    }
}




openBrowser()
closeBrowser()
openBrowserAE()
verifysite()
module.exports = {
    alreadyExistMail,
    
}


