describe('SauceDemo Logout Test', () => {

  it('Logout Successfully', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.get('#react-burger-menu-btn').click()

    cy.contains('Logout').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')

  })

})