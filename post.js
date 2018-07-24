var express = require('express');
var app = express();
var bodyParser =    require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/angulartest.html', function(req, res){
    res.sendFile(__dirname + '/' + 'angulartest.html');
    console.log("----------------");
});

app.get('/cities.json', function (req, res) {

    res.sendFile(__dirname + '/' + 'cities.json');


});

app.get('/areas.json', function (req, res) {

    res.sendFile(__dirname + '/' + 'areas.json');

});
app.get('/bootstrap.min.css', function (req, res) {
    res.sendFile(__dirname + '/' + 'bootstrap.min.css');
    console.log("****************");
});

app.post("/post", function (req, res) {
	    var response2;
        var value1=req.body.sName;
		var value2=req.body.cName;
		var value3=req.body.aName;
		var value4=req.body.fdate;
		var value5=req.body.tdate;

/*		 response1 = {
      id:"test1",
      av:"test2"
   };
   console.log(response1);
   console.log(JSON.stringify(response1));*/
   var request = require('request');
request('https://webcrawlerbackend.azurewebsites.net/api/GetSearchResults?city=bangalore&division=HSR layout&state=Karnataka&publishedStartDate=01-10-2012&publishedEndDate=15-10-2017', function (error, response, body) {
  if (!error && response.statusCode == 200) {
	  response2 = body ;
	  console.log("TEST:STATE NAME IS  "+value1);
	  console.log("TEST:CITY NAME IS  "+value2);
		console.log("TEST:AREA NAME IS  " +value3);
		console.log("TEST:FROM DATE IS  " +(value4.split("T"))[0]);
		console.log("TEST:TO DATE IS"+(value5.split("T"))[0]);
    console.log(body); // Print the body of response.
	res.end(body);
  }
})
   //console.log("hi" + response2);
   //res.end(JSON.stringify(response2));
  
});
app.listen(3000);