import 'cypress-real-events/support'

describe('scale tests', () => {
  it('add a date', () => {
    cy.visit('/')

    cy.get(':nth-child(2) > .form-control').should('be.visible').type("thiago@gmail.com")

    cy.get(':nth-child(3) > .form-control').should('be.visible').type("teste")

    cy.get('.btn-success').should('be.visible').click()

    cy.get('.css-13cymwt-control').should('be.visible').click()

    cy.get('#react-select-2-option-0').should('be.visible').click()

    cy.get('.text-end > .btn').should('be.visible').click()

    cy.get(':nth-child(4) > .nav-link').should('be.visible').click().wait(5000)

    cy.get(':nth-child(1) > .css-b62m3t-container > .css-13cymwt-control').should('be.visible').type("06:00:00 - 14:00:00").realPress('Tab').wait(5000)

    cy.get(':nth-child(2) > .css-b62m3t-container > .css-13cymwt-control').should('be.visible').type("Operador(a) de Caixa").realPress('Tab').wait(5000)

    cy.get('#workers-select > .css-13cymwt-control').should('be.visible').type("Claudia").realPress('Tab').wait(5000)

    cy.get('.react-calendar__month-view__days > :nth-child(11)').should('be.visible').click().wait(5000)

    cy.get('.modal-footer > .btn-success').should('be.visible').click().wait(5000)

    cy.get('#save-scale').should('be.visible').click().wait(5000)

    cy.get('.react-calendar__month-view__days > :nth-child(18)').should('be.visible').click().wait(5000)

    cy.get('.modal-footer > .btn-success').should('be.visible').click().wait(5000)

    cy.get('#save-scale').should('be.visible').click().wait(5000)
  })

  it('remove a date', () => {
    cy.visit('/')

    cy.get(':nth-child(2) > .form-control').should('be.visible').type("thiago@gmail.com")

    cy.get(':nth-child(3) > .form-control').should('be.visible').type("teste")

    cy.get('.btn-success').should('be.visible').click()

    cy.get('.css-13cymwt-control').should('be.visible').click()

    cy.get('#react-select-2-option-0').should('be.visible').click()

    cy.get('.text-end > .btn').should('be.visible').click()

    cy.get(':nth-child(4) > .nav-link').should('be.visible').click().wait(5000)

    cy.get(':nth-child(1) > .css-b62m3t-container > .css-13cymwt-control').should('be.visible').type("06:00:00 - 14:00:00").realPress('Tab').wait(5000)

    cy.get(':nth-child(2) > .css-b62m3t-container > .css-13cymwt-control').should('be.visible').type("Operador(a) de Caixa").realPress('Tab').wait(5000)

    cy.get('#workers-select > .css-13cymwt-control').should('be.visible').type("Claudia").realPress('Tab').wait(5000)

    cy.get('.react-calendar__month-view__days > :nth-child(11)').should('be.visible').click().wait(5000)

    cy.get('.react-calendar__month-view__days > :nth-child(11)').click().wait(5000)

    // cy.get('.modal-footer > .btn-danger').wait(5000)

    // cy.get('.react-calendar__month-view__days > :nth-child(18)').click().wait(5000)

    // cy.get('.modal-footer > .btn-danger').wait(5000)
  })
})
