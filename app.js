const express = require("express");
const app = express();

const addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  const newdate = addDays(new Date(), 100);
  response.send(
    `${newdate.getDate()}/${newdate.getMonth() + 1}/${newdate.getFullYear()}`
  );
});
module.exports = app;
