const { When } = require("cucumber");
const PuppeteerHelper = require("../../puppeteerhelper");
const selectors = require("../selectors/selectors");




When("Select Norway from DrowDownMenu", async function () {
    await PuppeteerHelper.page.select(selectors.DropdownMenu.dropdownmenu, "1");
});


