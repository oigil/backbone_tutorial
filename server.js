var express = require("express");
var bodyParser = require('body-parser');

//setting express
var app = express();
app.set("view engine", "jade");
app.use(bodyParser.json());
app.use("/static", express.static(__dirname + "/public"));

//static webpage
app.get("/", function(req, res){
    res.render("home");
});

//api module
require(__dirname + "/api/notes")(app);


app.listen(3030);
console.log("Starting express server on 3030 port...");