describe('poc-page: PocPage component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pocpage--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PocPage!');
    });
});
