beforeEach(() => {
  cy.intercept('http://localhost:3001/api/v1/reservations', {
    fixture: '../fixtures/res.json'
  })
  cy.visit('http://localhost:3000/')
})

describe('visit page and see initial app with title, reservation form and reservation cards', () => {
  it('Should have a title', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })

  it('Should display current reservations', () => {
    cy.get('.card').contains('Swanson')
    cy.get('.card').contains('07/27')
    cy.get('.card').contains('5:30 pm')
    cy.get('.card').contains('Number of guests: 4')
  })
  
  it('Should have a form to make a reservation and fill out the fields', () => {
    cy.get('.in-name').type('Henry').should('have.value', 'Henry')
    cy.get('.in-date').type('07/08').should('have.value', '07/08')
    cy.get('.in-time').type('6:45').should('have.value', '6:45')
    cy.get('.in-number').type(2).should('have.value', '02')
  })

  it('Should be able to make a reservation', () => {
    cy.get('.in-name').type('Henry')
    cy.get('.in-date').type('07/08')
    cy.get('.in-time').type('6:45')
    cy.get('.in-number').type(2)
    cy.get('.res-btn').click()
    cy.get('.card').contains('Henry')
  })
})