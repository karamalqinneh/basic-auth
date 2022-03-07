"use strict";

const server = require("../src/server");

const supertest = require("supertest");

const request = supertest(server.app);
const db = require("../src/models/index");

beforeAll(async () => {
  await db.sequelize.sync();
});
afterAll(async () => {
  await db.sequelize.drop();
});

describe("testing basic_auth server", () => {
  it("POST to /signup to create a new user", async () => {
    let body = {
      username: "user1",
      password: "testtest",
    };
    const response = request
      .post("/signup")
      .set(body)
      .then((res) => {
        if (res.status !== httpStatus.OK) {
          res.status = 404;
          return res;
        }
        res.status = 201;
        return res;
      });
    expect(response.status).toEqual(201);
  });
  it("POST to /signin to login as a user (use basic auth)", async () => {
    let body = {
      username: "user1",
      password: "testtest",
    };
    const response = request
      .post("/signin")
      .set(body)
      .then((res) => {
        if (res.status !== httpStatus.OK) {
          res.status = 404;
          return res;
        }
        res.status = 201;
        return res;
      });
    expect(response.status).toEqual(201);
  });
});
