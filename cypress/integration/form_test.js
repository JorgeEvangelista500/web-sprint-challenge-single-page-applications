describe('Pizza App', () =>{
    beforeEach(()=> {
        cy.visit('http://localhost:3000/pizza')
    })
    const nameInput = () => cy.get('input[name=name]');
    const submitBtn = () => cy.get('button[id="order-button"]');

    it("can add text to the box", () => {
        nameInput()
        .should('have.value', '')
        .type('Jorge')
        .should('have.value','Jorge')
    })

    it('can select multiple toppings', () => {
        cy.get('[type="checkbox"]').check('pepperoni')
        cy.get('[type="checkbox"]').check('sausage')
        cy.get('[type="checkbox"]').check('pepperoni').should('be.checked')
    })
    it('submit an order', () => {
        nameInput().type('Jorge')
        submitBtn().click()
        cy.contains('Jorge').should('exists')


    })
})