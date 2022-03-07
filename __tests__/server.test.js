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

beforeEach(async () => {
  let body = {
    username: "user1",
    password: "testtest",
  };
  await request.post("/signup").send(body);
});

describe("testing basic_auth server", () => {
  it("POST to /signup to create a new user", async () => {
    let body = {
      username: "user",
      password: "testtest",
    };
    const response = await request.post("/signup").send(body);
    expect(response.status).toEqual(201);
  });
  it("POST to /signin to login as a user (use basic auth)", async () => {
    const response = await request.post("/signin").auth("user1", "testtest");
    expect(response.status).toEqual(200);
  });
});
