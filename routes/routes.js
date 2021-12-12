const express = require('express');
const Cities = require("../controllers/Cities")
const Detail= require("../controllers/Detail")
let app = express.Router();

app.use("/cities", Cities.Cities);
app.use("/detail", Detail.Detail);

module.exports = app;