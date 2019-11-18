const express = require("express");
const app = express();

// Routes
const cepRoute = require("./routes/cepRoute");
const index = require("./routes/index");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// rotas
app.use('/', index);
app.use('/consulta', cepRoute);

module.exports = app;
