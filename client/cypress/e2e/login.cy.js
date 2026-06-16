describe("Test E2E Login", () => {
  it("connecte un utilisateur et affiche ses tâches", () => {
    cy.visit("http://localhost:5173/login");

    cy.get('input[placeholder="Email"]').type("test@example.com");
    cy.get('input[placeholder="Mot de passe"]').type("1234");

    cy.contains("Se connecter").click();

    cy.url().should("include", "/tasks");

    cy.contains("Tasks : Maryem BELOUAAR").should("be.visible");

    cy.contains("Faire les courses").should("be.visible");
  });
});