import request from "supertest";
import { server } from "./forTest";
import { expect } from "chai";

describe("POST /register", () => {
  const { app } = server;

  it("should return some defined error message with valid parameters", (done) => {
    return request(app)
      .post("/register")
      .field("email", "yerkinmm@gmail.com")
      .field("password", "Hunter2")
      .expect(302)
      .end(function (err, res) {
        expect(res.error).not.to.be.undefined;
        done();
      });
  });
});
