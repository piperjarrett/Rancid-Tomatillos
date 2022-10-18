describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should see the title of the application", () => {
    cy.get("header");
    cy.contains('Rancid Tomatillos')
  });
  it('SHould have a collection of movies on load', () => {
    cy.get('div[className="movie-container"]')
    .should('have.class', 'poster')
  })
});
