const click = ($el) => $el.click();
describe('pagination: Pagination component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pagination--primary'));

  it('should render the component', () => {
    // cy.get("[data-testid='previousButton']").click();
    // cy.get("[data-testid='nextButton']").click();
    // cy.get('[data-testid=nextButton]').click();
    // cy.wait(cy.get('[data-testid=nextButton]')).click();
    // cy.get('[data-testid=nextButton]').should('exist'); // works
    // cy.get('[data-testid=nextButton]').click({ force: true });
    // cy.get('[data-testid=previousButton]').then((o) => o.trigger('click'));
    // cy.get('[data-testid=previousButton]').pause().trigger('click', {
    //   force: true,
    // });
    // setTimeout(() => {

    cy.get('[data-testid=previousButton]').pipe(click);
    // .then((e) => {
    //   e[0].click;
    //   console.log('gello');
    //   // cy.click();
    //   // e[0].click();
    //   // console.log('e', e[0]);
    // });
    // cy.pip
    // .should('be.visible')
    // .click();
    // cy.get('[data-testid=nextButton]').click();
    // cy.get('[data-testid=nextButton]').click();
    // cy.get('[data-testid=nextButton]').click();
    // cy.get('[data-testid=nextButton]').click();
    // });
    // cy.get('[data-testid="nextButton"]').click();
  });
});
