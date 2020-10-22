import request from "supertest";
import { server } from "./forTest";

describe("GET /random-url", () => {
  const { app } = server;

  it("should return 404", (done) => {
    request(app).get("/random-url").expect(404, done);
  });
});
