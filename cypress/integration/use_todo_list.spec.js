/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('adds points to todolist', () => {
    cy.get('.add_item').type('Smth to do{enter}')
    cy.get('.container').should('contain', 'Smth to do')
    cy.get(':nth-child(6) > .remove_item').click()
    cy.get('.container').should('contain', 'Smth to do')
  })
})
