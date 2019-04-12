var path = require("path");
var express = require("express");
var fs = require('fs');
if (!fs.existsSync("build")) {
	console.log("build dir is not found");
	console.log("run npm build cmd");
   return;
}

var DIST_DIR = path.join( path.join(__dirname, '../'), "build");
var PORT = 3100;
var app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get('/backend_test', (req, res) => {
  res.send({ express: 'result' });
});

app.listen(PORT);
console.log( "listening on port = " + PORT );