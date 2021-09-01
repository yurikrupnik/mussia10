beforeEach(() => cy.visit('/iframe.html?id=pagination--primary'));
describe('pagination: Pagination component', () => {
  it('should render the component', () => {
    cy.get('[data-testid=previousButton]').click();
    cy.get('[data-testid=nextButton]').click();
    cy.get('[data-testid=nextButton]').click();
    cy.get('[data-testid=nextButton]').click();
    cy.get('[data-testid=nextButton]').click();
    cy.screenshot();
  });
});
