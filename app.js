var express = require("express");
var chalk = require("chalk");
var debug = require("debug")("app");
var morgan = require("morgan");
var path = require("path");

var app = express();

app.use(morgan("combined"));
// The project has static directories to hold
// static files. Specify a directory for those files.
// If the files are not in the specified directory
// then use the files from the node modules.
app.use(express.static(path.join(__dirname, "/public")));
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.listen(3000, function () {
  debug(`listening on port + ${chalk.greenBright("3000")}`);
});

