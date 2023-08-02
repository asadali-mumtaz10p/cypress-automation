/// <reference types = "Cypress" />
//import config from '../fixtures/example.json'


describe('My Test Suite', function()
{
beforeEach(() => {
    cy.visit('/')
})

it('Interact with the elements', () => {
    cy.fixture('example').then(function (data) {
        this.data = data
    cy.WriteNameField(this.data.firstName, this.data.lastName);
    cy.WriteEmailAndGender(this.data.EmailAdd)
    cy.EnterMobileAndSubject(this.data.Mobile, this.data.Subject)
    cy.SelectHobbies()
    cy.InsertAddress(this.data.Address)
    cy.InsertDOB('January','2030','5')
    cy.SelectStateAndCity('NCR', 'Noida')
})
})
})
