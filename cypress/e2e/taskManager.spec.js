describe('Task Manager App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should add a new todo item', () => {
      cy.contains('Add Todo').click();
      cy.contains('New todo').should('be.visible');
    });
  
    it('should increment the counter', () => {
      cy.contains('Increment Counter').click();
      cy.contains('Counter: 1').should('be.visible');
    });
  
    it('should add a custom task through the input field', () => {
      cy.get('input').type('New Custom Task');
      cy.contains('Submit').click();
      cy.contains('New Custom Task').should('be.visible');
    });
  });
  