describe('SauceDemo Checkout Test', () => {

  it('Complete Checkout', () => {

    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')

    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Muhammad')

    cy.get('[data-test="lastName"]').type('Ferooz')

    cy.get('[data-test="postalCode"]').type('54000')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()

    cy.contains('Thank you for your order!').should('be.visible')

  })

})