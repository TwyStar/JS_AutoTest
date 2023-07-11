const { When } = require("cucumber");
const PuppeteerHelper = require('../../puppeteerhelper');
const ids = require("../iDs/ids");


When("Select gender", async function(){
    const element = await PuppeteerHelper.page.$(ids.gender.male);
    await element.click()
});

When("Select Tuesday and Friday", async function () {
    const Tuesday = await PuppeteerHelper.page.$(ids.days.Tuesday);
    await Tuesday.click();
    const Friday = await PuppeteerHelper.page.$(ids.days.Friday);
    await Friday.click();
});


