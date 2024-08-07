// cypress/integration/todo_app_spec.js
describe('Todo App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should add a new todo item', () => {
    cy.get('button').contains('Add todo').click();
    cy.contains('New todo').should('be.visible');
  });

  it('should increment the counter', () => {
    cy.get('button').contains('Increment Counter').click();
    cy.contains('Counter: 1').should('be.visible');
  });

  it('should add a custom task', () => {
    cy.get('input').type('Custom task');
    cy.get('button').contains('Submit').click();
    cy.contains('Custom task').should('be.visible');
  });

  it('should not add a custom task if less than 6 characters', () => {
    cy.get('input').type('Short');
    cy.get('button').contains('Submit').click();
    cy.contains('Short').should('not.exist');
  });
});
