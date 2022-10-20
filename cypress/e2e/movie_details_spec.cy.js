describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/movies/539885");
  });
  it("Should see the title of the movie", () => {
    cy.get("h1");
    cy.contains("Ava");
  });
  it("Should have a tagline", () => {
    cy.get('div')
    .find(
      'p'
    ).should("have.class", "tagline").contains("Kill. Or be killed.");
  });
  it("Should have an overview", () => {
    cy.get('div')
    .find(
      'p'
    )
      .should("have.class", "overview")
      .contains(
        "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong."
      );
  });
  it("Should have an rating", () => {
    cy.get('div')
      .find(
        'p'
      ).should('have.class', 'rating').contains('🍅 Rating: 5.88')
  })
  it("Should have an release date", () => {
    cy.get('div')
      .find(
        'p'
      ).should('have.class', 'release-date')
      .contains('Release Date:07/02/2020')
  })
  it("Should have a genre", () => {
    cy.get('div')
      .find(
        'p'
      ).should('have.class', 'genre')
      .contains('Genre: Action, Crime, Drama, Thriller')
  })
  it('Should display movie trailers', () => {
    cy.intercept(
      {method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/539885/videos'},
      {
        videos: [{
          id: 290,
          movie_id: 539885,
          key: "ozUuAcGOhPs",
          site: "YouTube",
          type: "Trailer"
          }]
      }
    )
  })
  it("Should have a runtime", () => {
    cy.get('div')
      .find(
        'p'
      ).should('have.class', 'runtime')
      .contains('Runtime: 96 Minutes')
  })
  it("Should have button to go back to the home page", () => {
    cy.get('a').should('have.attr', 'href', '/').click().url().should('include', 'http://localhost:3000/')
  });
});
