describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should see the title of the application", () => {
    cy.get("h1");
    cy.contains("Rancid Tomatillos");
  });
  it("Should show a random image on page load", () => {
    cy.get("main")
      .find("img")
      .should("have.class", "header-image")
      .should("have.attr", "src");
  });
  it("Should have a collection of movies on load", () => {
    cy.get("section")
      .should("have.class", "movie-container")
      .find("img")
      .should("have.class", "poster")
      .should("have.attr", "src");
  });
  it("Should show details of the movie when the movie is clicked on", () => {
    cy.intercept(
      {
        method: "POST",
        url: "http://localhost:3000/movies/337401",
      },
      {
        id: 337401,
        title: "Mulan",
        backdrop_path:
          "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        release_date: "2020-09-04",
        overview:
          "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        budget: 200000000,
        revenue: 57000000,
        runtime: 115,
        tagline: "",
        average_rating: 5.1,
      }
    ).get('img#337401.poster').click().url().should('include', '/movies/337401')
  });
});
