"use strict";

process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");


describe("GET /categories", function () {
  test("success - gets categories when count specified", async function () {
    const response = await request(app).get('/api/categories?count=1');
    expect(response.body.length).toEqual(1);
    expect(response.statusCode).toEqual(200);
  });

  test(
    "success - gets default number of categories when no count specified",
    async function () {
      const response = await request(app).get('/api/categories');
      expect(response.body.length).toEqual(5);
      expect(response.statusCode).toEqual(200);
  });
});

describe("GET /category", function () {
  test("success - gets information on a specific category", async function () {
    const response = await request(app).get('/api/category?id=2');
    expect(response.body.id).toEqual(2);
    expect(response.statusCode).toEqual(200);
  });

  test("error - no category ID is provided", async function () {
    const response = await request(app).get('/api/category?id=0');
    expect(response.body.error.message).toContain("Invalid category id");
    expect(response.statusCode).toEqual(400);
  });

  test("error - nonexistant category ID is provided", async function () {
    const response = await request(app).get('/api/category');
    expect(response.body.error.message).toContain("Must pass in a query string parameter of id");
    expect(response.statusCode).toEqual(400);
  });
});