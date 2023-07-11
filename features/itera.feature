Feature: itera autoTest

	Scenario: Textarea practice
		Given Launch new browser and open ITERAURL
		When FillOut Form
			And Click Submit Button
			And Close Browser


	Scenario: CheckBox & Radio Button practice
		Given Launch new browser and open ITERAURL
		When Select gender
			And Select Tuesday and Friday
			And Close Browser

	Scenario: DropDown
		Given Launch new browser and open ITERAURL
		When Select Norway from DrowDownMenu
			And Close Browser

	Scenario: CheckBox & Radio Button practice Xpath
		Given Launch new browser and open ITERAURL
		When Select Radio Button by Xpath
			And Check the Selenium Checkbox and TestNG by Xpath
			And Close Browser