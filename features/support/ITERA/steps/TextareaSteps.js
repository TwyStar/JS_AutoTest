const { When } = require("cucumber");
const randomstring = require('randomstring');
const PuppeteerHelper = require("../../puppeteerhelper");
const selectors = require("../selectors/selectors");

When("FillOut Form", async function () {
    await PuppeteerHelper.page.waitForSelector(selectors.ButtonSelectors.submitButton);
    await PuppeteerHelper.page.type(selectors.TextSelectors.name, randomstring.generate(10))
    await PuppeteerHelper.page.type(selectors.TextSelectors.phoneNumber, "06564874555")
    await PuppeteerHelper.page.type(selectors.TextSelectors.email, randomstring.generate(10) + "@" + randomstring.generate(5) + ".com")
    await PuppeteerHelper.page.type(selectors.TextSelectors.pass, randomstring.generate(10))
    await PuppeteerHelper.page.type(selectors.TextSelectors.address, randomstring.generate(10))
});

When("Click Submit Button", async function () {
    await PuppeteerHelper.page.click(selectors.ButtonSelectors.submitButton)
});





