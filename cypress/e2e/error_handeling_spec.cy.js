describe("empty spec", () => {
  it("Should show error when movie wont display", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/v2/movies",
      },
      {
        forceNetworkError: true,
      }
    );
    cy.visit("/")
      .get('[class="error-message"]')
      .contains("Sorry, something went wrong! Please try again.");
    
  });
  it('Should show error when the details dont display', () => {
    cy.visit('/movies/53988565')
    .get('[class="single-error-message"]')
    .contains('Sorry, something went wrong! Please go back to the main page.')
  })
});
