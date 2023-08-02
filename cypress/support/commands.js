
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

// Cypress.Commands.add('login', (username, password) =>{
//     cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
//     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
//     cy.get('.oxd-button').click()
// })

// Cypress.Commands.add('logout', () =>{
// cy.get('.oxd-userdropdown-tab > .oxd-icon').click({ force: true })
// cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
// })

// Cypress.Commands.add('GoToApplyLeaves', () => {
//   cy.get(':nth-child(1) > .oxd-icon-button > .oxd-icon > g > .cls-1').click({force: true})
//   cy.get('h6').contains('Assign Leave')
// })
// Cypress.Commands.add('FillLeaveForm',(EmpName) => {
//   cy.get('.oxd-autocomplete-text-input').type(EmpName)
//   cy.get('.oxd-select-text').eq('1').click()
// })
// oxd-autocomplete-wrapper

Cypress.Commands.add('WriteNameField',(firstName, lastName) => {
  cy.get('[id="userName-label"]').then(label => {
   expect(label.text()).to.eq('Name') 
  })
   cy.get('#firstName').type(firstName)
   cy.get('#lastName').type(lastName)
})

Cypress.Commands.add('WriteEmailAndGender',(EmailAdd) => {
  cy.get('[id="userEmail-label"]').then(label => {
  expect(label.text()).to.equals('Email')
  })
  cy.get('#genterWrapper').find('div').eq(0).should('have.text','Gender')
  cy.get('#userEmail').type(EmailAdd)
  cy.get('#genterWrapper').find('#gender-radio-1').click({force: true})
})

Cypress.Commands.add('EnterMobileAndSubject',(Mobile, Subject) => {
  cy.get('[id="userNumber-label"]').then(label => {
    cy.wrap(label).should('contain', 'Mobile')
  })
  cy.get('#userNumber').type(Mobile)
  cy.get('#subjectsWrapper').find('#subjectsInput').type(Subject)
})

Cypress.Commands.add('SelectHobbies', () => {
  cy.get('[id="hobbiesWrapper"]').then(label => {
    cy.wrap(label).find('#subjects-label').should('contain','Hobbies')
  })
  cy.get('#hobbiesWrapper').find('#hobbies-checkbox-1').check({force: true})
  cy.get('#hobbiesWrapper').find('#hobbies-checkbox-2').check({force: true})
})

Cypress.Commands.add('InsertAddress', (address) =>{
  cy.get('[id="currentAddress-label"]').invoke('text').then(addtext =>{
    expect(addtext).to.eq('Current Address')
  })
  cy.get('#currentAddress-wrapper').find('#currentAddress').type(address)
})

Cypress.Commands.add('InsertDOB', (month, year, date)=> {
  cy.get('[id="dateOfBirth-label"]').then($label =>{
    expect($label.text()).to.eq('Date of Birth')
  })
  cy.get('#dateOfBirthInput').click()
  cy.get('.react-datepicker__month-container').find('.react-datepicker__month-select').select(month)
    cy.get('.react-datepicker__year-select').select(year)
    cy.get('.react-datepicker__day').contains(date).click()
})

Cypress.Commands.add('SelectStateAndCity', (state,city) => {
  cy.get('.col-md-3').then(label => {
    cy.wrap(label).find('#stateCity-label').should('contain','State and City')
  }) 
  cy.get('#state').click()
  cy.get('.css-11unzgr').contains(state).click({force: true})
  cy.get('#city').click()
  cy.get('.css-11unzgr').contains(city).click({force: true})
})


