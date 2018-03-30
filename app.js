var express = require("express");
var chalk = require("chalk");
var debug = require("debug")("app");
var morgan = require("morgan");

var app = express();

app.use(morgan("combined"));

app.get("/", function (req, res) {
  res.send("Hello from Node Library app!");
});

app.listen(3000, function () {
  debug(`listening on port + ${chalk.greenBright("3000")}`);
});

