module.exports = {
    TextSelectors: {
        name: "#name",
        phoneNumber: "#phone",
        email: "#email",
        pass: "#password",
        address: "#address",
    },
    DropdownMenu: {
        dropdownmenu: "body > div > div:nth-child(5) > div.card-body > div > select"
    },
    ButtonSelectors: {
        submitButton: "button.btn"
    },
    CheckBoxSelectors: {
        //cant find safty selectors
        female: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(2) > label',
        male: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(3) > label',
        other: 'body > div > div:nth-child(4) > div.card-body > div.form-check.disabled > label',
        Monday: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(7) > label',
        Tuesday: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(8) > label',
        Wednesday: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(9) > label',
        Thursday: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(10) > label',
        Friday: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(11) > label',
        Saturday: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(12) > label',
        Sunday: 'body > div > div:nth-child(4) > div.card-body > div:nth-child(13) > label'
    }

}