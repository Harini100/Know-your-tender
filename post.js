var express = require('express');
var app = express();
var bodyParser =    require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/angulartest.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'angulartest.html');
    console.log("----------------");
});
app.get('/cities.json', function (req, res) {
    res.sendFile(__dirname + '/' + 'cities.json');
    console.log("################");
});
app.get('/areas.json', function (req, res) {
    res.sendFile(__dirname + '/' + 'areas.json');
    console.log("################");
});
app.get('/bootstrap.min.css', function (req, res) {
    res.sendFile(__dirname + '/' + 'bootstrap.min.css');
    console.log("****************");
});
app.post("/post", function (req, res) {
	    var response2;
		var value1=req.body.cName;
		var value2=req.body.aName;
		var value3=req.body.tName

/*		 response1 = {
      id:"test1",
      av:"test2"
   };
   console.log(response1);
   console.log(JSON.stringify(response1));*/
   var request = require('request');
request('http://localhost:6000', function (error, response, body) {
  if (!error && response.statusCode == 200) {
	  response2 = body ;
	  console.log("TEST:CITY NAME IS  "+value1);
		console.log("TEST:AREA NAME IS  " +value2);
		console.log("TEST:TENDER TYPE IS  " +value3);
    console.log(body); // Print the body of response.
	res.end(body);
  }
})
   //console.log("hi" + response2);
   //res.end(JSON.stringify(response2));
  
});
app.listen(3000);