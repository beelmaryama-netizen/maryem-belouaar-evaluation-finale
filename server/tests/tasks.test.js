const request = require("supertest");

describe("Test API Tasks", () => {
  test("GET /api/tasks?user_id=1 retourne un statut 200 et une réponse JSON", async () => {
    const response = await request("http://localhost:5000")
      .get("/api/tasks")
      .query({ user_id: 1 });

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true);
  });
});