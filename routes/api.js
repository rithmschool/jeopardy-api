"use strict";

const express = require("express");

const { categories, categoryDetail } = require("../constants");
const { BadRequestError } = require("../expressError");

const router = express.Router();

const DEFAULT_NUM_CATEGORIES = 5;

/** GET /categories
 *
 * Returns array of category objects: [ {id, title, clues_count}, ... ]
 *
 * Optional query param of "count"; defaults to 5 if query param is omitted.
 *
*/
router.get("/categories", function (req, res, next) {
  const numOfCategories = req.query.count || DEFAULT_NUM_CATEGORIES;
  return res.json(categories.slice(0, numOfCategories));
});

/** GET /category?id=[categoryId]
 *
 * Returns category object: { id, title, clues: [ clue, ... ], clues_count }
 *  where each "clue" object includes: { id, answer, question, ...}
 *
 * Throws bad request error on malformed query string.
 *
*/
router.get("/category", function (req, res, next) {
  const categoryId = req.query.id;

  if (categoryId === undefined) {
    throw new BadRequestError("Must pass in a query string parameter of id");
  }
  if (categoryDetail[categoryId] === undefined) {
    throw new BadRequestError("Invalid category id");
  }

  return res.json(categoryDetail[categoryId]);
});

module.exports = router;
