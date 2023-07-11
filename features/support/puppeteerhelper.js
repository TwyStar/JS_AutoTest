const puppeteer = require("puppeteer");
var { setDefaultTimeout, Before, AfterAll } = require('cucumber');
require('dotenv').config();
const fs = require('fs')



if(!fs.existsSync('.env')){
    console.log("Egy fájl nem található, kérem vegye fel velem a kapcsolatot :)")
    process.exit(1);
}


class PuppeteerHelper {
    static async launchBrowser() {
        this.browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            slowMo: process.env.SLOWMO,
            devtools: false,
            args: ['--start-maximized',
                '--window-size=1920,1080'
            ]
        });
        this.page = await this.browser.newPage();
    }

    static async closeBrowser() {
        await this.browser.close();
    }
}

setDefaultTimeout(60 * 1000);

Before(async function () {
    await PuppeteerHelper.launchBrowser();
});

AfterAll(async function () {
    await PuppeteerHelper.closeBrowser();
});

module.exports = PuppeteerHelper;
