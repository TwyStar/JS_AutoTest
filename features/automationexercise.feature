Feature: Automationexercise autoTest

    Scenario: Register User
        Given Launch new browser and open AEURL
        Then Verify that home page is visible successfully
        When Click on 'Signup / Login' button
        Then Verify 'New User Signup!' is visible
        When Enter random name and random email address
            And Click 'Signup' button
        Then Verify that 'ENTER ACCOUNT INFORMATION' is visible
        When Fill details: Title, Name, Email, Password, Date of birth
            And Select checkbox 'Sign up for our newsletter!
            And Select checkbox 'Receive special offers from our partners!
            And Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
            And Click 'Create Account button'
        Then Verify that 'ACCOUNT CREATED!' is visible
        When Click 'Continue' button
        Then Verify that 'Logged in as username' is visible
        When Click 'Delete Account' button
        Then Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        When Close Browser

    Scenario: Register User Without delete
        Given Launch new browser and open AEURL
        Then Verify that home page is visible successfully
        When Click on 'Signup / Login' button
        Then Verify 'New User Signup!' is visible
        When Enter name and email address
            And Click 'Signup' button
        Then Verify that 'ENTER ACCOUNT INFORMATION' is visible
        When Fill details: password, Date of birth
            And Select checkbox 'Sign up for our newsletter!
            And Select checkbox 'Receive special offers from our partners!
            And Fill details: First name, Last name, Address, Country, State, City, Zipcode, Mobile Number
            And Click 'Create Account button'
        Then Verify that 'ACCOUNT CREATED!' is visible
        When Click 'Continue' button
        Then Verify that 'Logged in as username' is visible
        When Close Browser

    Scenario: Login User with correct email and password
        Given Launch new browser and open AEURL
        Then Verify that home page is visible successfully
        When Click on 'Signup / Login' button
        Then Verify 'Login to your account' is visible
        When Enter correct email address and password
            And Click 'login' button
        Then Verify that 'Logged in as username' is visible
        When Click 'Delete Account' button
        Then Verify that 'ACCOUNT DELETED!' is visible
        When Close Browser

    Scenario: Login User with incorrect email and password
        Given Launch new browser and open AEURL
        Then Verify that home page is visible successfully
        When Click on 'Signup / Login' button
        Then Verify 'Login to your account' is visible
        When Enter incorrect email address and password
        When Click 'Continue' button
        Then Verify error 'Your email or password is incorrect!' is visible
        When Close Browser

    Scenario: Logout User
        Given Launch new browser and open AEURL
        Then Verify that home page is visible successfully
        When Click on 'Signup / Login' button
        Then Verify 'Login to your account' is visible
        When Enter correct email address and password
            And Click 'login' button
        Then Verify that 'Logged in as username' is visible
        Then Verify 'New User Signup!' is visible
        When Close Browser


    #Examples:
    #   |name       |email                   |password  |
    #   |Teszt Elek |Tesztelek@tesztelek.com |TesztElek1|
    #   |Teszt Elek1|Tesztelek@tesztelek1.com|TesztElek2|