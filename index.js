const { categories, categoryDetail } = require("./constants");
const PORT = process.env.PORT || 3000
const express = require("express");
const morgan = require("morgan")
const app = express();
const { NotFoundError } = require("./expressError");
app.use(morgan("tiny"));
const cors = require("cors");

app.use(cors())

app.get("/api/categories", function(req,res,next){
  const numOfCategories = req.query.count || 5;
  return res.json(categories.slice(0, numOfCategories))
})

app.get("/api/category", function (req, res, next) {
  const categoryId = req.query.id
  if (categoryId === undefined) {
    throw new BadRequestError("Must pass in a query string parameter of id")
  }
  return res.json(categoryDetail[categoryId])
})

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  throw new NotFoundError()
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});


app.listen(PORT, function(){
  console.log(`Server started on ${PORT}`)
})