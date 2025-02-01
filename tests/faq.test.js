import request from "supertest";
import app from "../server.js";

describe("FAQ API Tests", () => {
  it("should fetch FAQs", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.statusCode).toBe(200);
  });

  it("should add a new FAQ", async () => {
    const res = await request(app).post("/api/faqs").send({
      question: "What is Node.js?",
      answer: "Node.js is a JavaScript runtime.",
    });
    expect(res.statusCode).toBe(201);
  });
});
