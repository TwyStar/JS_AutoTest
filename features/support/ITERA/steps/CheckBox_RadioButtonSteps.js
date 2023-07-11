const { When } = require("cucumber");
const xpath = require("../xpaths/xpath");
const PuppeteerHelper = require("../../puppeteerhelper");



When("Select Radio Button by Xpath", async function () {
    const year2 = xpath.radioButtons.year2;
    await PuppeteerHelper.page.waitForXPath(year2)
    const year2RButton = await PuppeteerHelper.page.$x(year2)
    await year2RButton[0].click();
});


When("Check the Selenium Checkbox and TestNG by Xpath", async function () {
    const cucumber = xpath.tools.cucumber;
    await PuppeteerHelper.page.waitForXPath(cucumber);
    const cucumberButton = await PuppeteerHelper.page.$x(cucumber);
    await cucumberButton[0].click();
});