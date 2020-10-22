import request from "supertest";
import { server } from "./forTest";

describe("GET /", () => {
  const { app } = server;

  it("should return 200", (done) => {
    request(app).get("/").expect(200, done);
  });
});
