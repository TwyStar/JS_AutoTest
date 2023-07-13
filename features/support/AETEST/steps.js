const { When, Then } = require("cucumber");
const randomstring = require('randomstring');
const PuppeteerHelper = require("../puppeteerhelper");
const ButtonSelectors = require('../AETEST/selectors/buttonSelectors');
const textFSelectors = require("./selectors/textFSelectors");
const dropdownSelectors = require("./selectors/dropdownSelectors");
const checkboxSelectors = require("./selectors/checkboxSelectors");
const buttonSelectors = require("../AETEST/selectors/buttonSelectors");
const radioSelectors = require("./selectors/radioSelectors");
//const { alreadyExistMail } = require("../../commonsteps");
const labelSelectors = require("./selectors/labelSelectors");


//Register User

When("Click on 'Signup / Login' button", async function () {
    await PuppeteerHelper.page.click(ButtonSelectors.login)
});

Then("Verify 'New User Signup!' is visible", async function () {
    const text = "New User Signup!";
    const content = await PuppeteerHelper.page.content()

    if (!text === content) {
        PuppeteerHelper.closeBrowser();
    }
});

When("Enter random name and random email address", async function () {
    await PuppeteerHelper.page.type(textFSelectors.name, randomstring.generate(6))
    await PuppeteerHelper.page.type(textFSelectors.email, randomstring.generate(5) + "@" + randomstring.generate(6) + ".com")

});

When("Click 'Signup' button", async function () {
    await PuppeteerHelper.page.click(ButtonSelectors.singup)

    const text = "Email Address already exist!";
    const content = await PuppeteerHelper.page.content();

    /*if (text === content) {
        alreadyExistMail()
    }*/


});

Then("Verify that 'ENTER ACCOUNT INFORMATION' is visible", async function () {
    const text = "ENTER ACCOUNT INFORMATION"
    const content = await PuppeteerHelper.page.content();

    if (!text === content) {
        PuppeteerHelper.closeBrowser();
    }
});

When("Fill details: Title, Name, Email, Password, Date of birth", async function () {
    await PuppeteerHelper.page.click(radioSelectors.mr);
    await PuppeteerHelper.page.type(textFSelectors.pass, randomstring.generate(10));
    await PuppeteerHelper.page.waitForSelector(dropdownSelectors.day);

    const dropdown = Object.values(dropdownSelectors);

    for (const dropdownSelector of dropdown) {
        const options = await PuppeteerHelper.page.$$eval(`${dropdownSelector} option`, (options) => options.map((option) => option.value));
        const randomIndex = Math.floor(Math.random() * options.length);
        const selectedValue = options[randomIndex];
        await PuppeteerHelper.page.select(dropdownSelector, selectedValue);
    }

});

When("Select checkbox 'Sign up for our newsletter!", async function () {
    await PuppeteerHelper.page.click(checkboxSelectors.for_news);
});

When("Select checkbox 'Receive special offers from our partners!", async function () {
    await PuppeteerHelper.page.click(checkboxSelectors.receive_offers);
});

When("Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number", async function () {
    const textFselectors = textFSelectors.address_detail;

    for (const textF of Object.values(textFselectors)) {
        const random = randomstring.generate(10);
        await PuppeteerHelper.page.type(textF, random)
    }

    const options = await PuppeteerHelper.page.$$eval(`${dropdownSelectors.country_dropdown} option`, (options) => options.map((option) => option.value));
    const randomIndex = Math.floor(Math.random() * options.length);
    await PuppeteerHelper.page.select(dropdownSelectors.country_dropdown, options[randomIndex]);

    await PuppeteerHelper.page.$eval(textFselectors.mobile_number, (element) => element.value = "");
    await PuppeteerHelper.page.type(textFselectors.mobile_number, "06798544441")
    await PuppeteerHelper.page.$eval(textFselectors.zipcode, (element) => element.value = "");
    await PuppeteerHelper.page.type(textFselectors.zipcode, "1173")
});



When("Click 'Create Account button'", async function () {
    await PuppeteerHelper.page.click(buttonSelectors.create_account)
});

Then("Verify that 'ACCOUNT CREATED!' is visible", async function () {
    const text = "ACCOUNT CREATED!"
    const content = await PuppeteerHelper.page.content();

    if (!text === content) {
        PuppeteerHelper.closeBrowser()
    }
});

When("Click 'Continue' button", async function () {
    await PuppeteerHelper.page.click(buttonSelectors.continue)
});

Then("Verify that 'Logged in as username' is visible", async function () {
    const text = "Logged in as";
    const content = await PuppeteerHelper.page.content();

    if (!text === content) {
        PuppeteerHelper.closeBrowser();
    }
});

When("Click 'Delete Account' button", async function () {
    await PuppeteerHelper.page.waitForSelector(buttonSelectors.delete_account)
    await PuppeteerHelper.page.click(buttonSelectors.delete_account);
});

Then("Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button", async function () {
    const text = "ACCOUNT DELETED!";
    const content = await PuppeteerHelper.page.content();

    if (!text === content) {
        PuppeteerHelper.closeBrowser();
    }

    await PuppeteerHelper.page.click(buttonSelectors.continue);
});


//Register User Without delete

When("Enter name and email address", async function () {
    await PuppeteerHelper.page.type(textFSelectors.name, process.env.TEST_USER_NAME);
    await PuppeteerHelper.page.type(textFSelectors.email, process.env.MAIL);
});

When("Fill details: password, Date of birth", async function () {
    await PuppeteerHelper.page.type(textFSelectors.pass, process.env.PASS);
    await PuppeteerHelper.page.waitForSelector(dropdownSelectors.day);

    const dropdown = Object.values(dropdownSelectors);

    for (const dropdownSelector of dropdown) {
        const options = await PuppeteerHelper.page.$$eval(`${dropdownSelector} option`, (options) => options.map((option) => option.value));
        const randomIndex = Math.floor(Math.random() * options.length);
        const selectedValue = options[randomIndex];
        await PuppeteerHelper.page.select(dropdownSelector, selectedValue);
    }
});

When("Fill details: First name, Last name, Address, Country, State, City, Zipcode, Mobile Number", async function () {
    await PuppeteerHelper.page.type(textFSelectors.address_detail.first_name, "Teszt");
    await PuppeteerHelper.page.type(textFSelectors.address_detail.last_name, "Elek")
    await PuppeteerHelper.page.type(textFSelectors.address_detail.address, randomstring.generate(10));

    const options = await PuppeteerHelper.page.$$eval(`${dropdownSelectors.country_dropdown} option`, (options) => options.map((option) => option.value));
    const randomIndex = Math.floor(Math.random() * options.length);

    await PuppeteerHelper.page.select(dropdownSelectors.country_dropdown, options[randomIndex]);
    await PuppeteerHelper.page.type(textFSelectors.address_detail.state, randomstring.generate(5));
    await PuppeteerHelper.page.type(textFSelectors.address_detail.city, randomstring.generate(5));
    await PuppeteerHelper.page.type(textFSelectors.address_detail.zipcode, "1173");
    await PuppeteerHelper.page.type(textFSelectors.address_detail.mobile_number, "0689541545")

});

//Login User with correct email and password

Then("Verify 'Login to your account' is visible", async function () {
    const text = "Login to your account";
    const conent = await PuppeteerHelper.page.content();

    if (!text === conent) {
        PuppeteerHelper.closeBrowser()
    }
});

When("Enter correct email address and password", async function () {
    await PuppeteerHelper.page.type(textFSelectors.login.emailTextF, process.env.MAIL);
    await PuppeteerHelper.page.type(textFSelectors.login.passTextF, process.env.PASS);
});

When("Click 'login' button", async function () {
    await PuppeteerHelper.page.click(buttonSelectors.loginFrom.loginBtn)
});

Then("Verify that 'ACCOUNT DELETED!' is visible", async function () {
    const text = "Account Deleted!";
    const conent = await PuppeteerHelper.page.content()

    if (!text === conent) {
        PuppeteerHelper.closeBrowser()
    }

});

//Login User with incorrect email and password

When("Enter incorrect email address and password", async function () {
    await PuppeteerHelper.page.type(textFSelectors.login.emailTextF, "wrongmail@wrongmail.com");
    await PuppeteerHelper.page.type(textFSelectors.login.passTextF, "wrongpass")
});

Then("Verify error 'Your email or password is incorrect!' is visible", async function () {
    const text = "Your email or password is incorrect!"
    const content = await PuppeteerHelper.page.content();

    if (!text === content) {
        PuppeteerHelper.closeBrowser()
    }
});

//Logout user
When("Click 'Logout' button", async function(){
    await PuppeteerHelper.page.click(ButtonSelectors.logout);
});

//Register User with existing email

When("Enter name and already registered email address", async function(){
    await PuppeteerHelper.page.type(textFSelectors.name, process.env.TEST_USER_NAME);
    await PuppeteerHelper.page.type(textFSelectors.email, process.env.MAIL);
});

Then("Verify error 'Email Address already exist!' is visible", async function(){
    const text = "Email Address already exist!";
    const content = await PuppeteerHelper.page.content();

    await PuppeteerHelper.page.waitForSelector(labelSelectors.email_already)

    if(text === content){
        PuppeteerHelper.closeBrowser();
    }
});