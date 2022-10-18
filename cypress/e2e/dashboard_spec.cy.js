describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should see the title of the application", () => {
    cy.get("header");
    cy.contains('Rancid Tomatillos')
  });
  it('Should show a random image on page load', () => {
    cy.get('main').find('img').should('have.class', 'header-image').should('have.attr', 'src')
  })
  it('Should have a collection of movies on load', () => {
    cy.get('section')
    .should('have.class', 'movie-container').find('img').should('have.class', 'poster').should('have.attr', 'src')
  })
});
