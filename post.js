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

app.post("/post", function (req, res) {
	    var response2;
        var value1=req.body.sName;
		var value2=(req.body.cName).toLowerCase();
		var value3=req.body.aName;
		var value4=req.body.fdate;
		var value5=req.body.tdate;
		var value6=(value4.split("T"))[0];
		var value7=(value5.split("T"))[0];
		console.log(value4);
		console.log(value5);
		var value8=value6.split("-").reverse();
		var value9=value7.split("-").reverse();
		var value10=value8.join("-");
		var value11=value9.join("-");

/*		 response1 = {
      id:"test1",
      av:"test2"
   };
   console.log(response1);
   console.log(JSON.stringify(response1));*/
   var request = require('request');
   console.log('https://webcrawlerbackend.azurewebsites.net/api/GetSearchResults?city='+value2+'&division='+value3+'&state='+value1+'&publishedStartDate='+value10+'&publishedEndDate='+value11);
//  request('https://webcrawlerbackend.azurewebsites.net/api/GetSearchResults?city=bangalore&division=HSR layout&state=Karnataka&publishedStartDate=01-10-2012&publishedEndDate=15-10-2017', function (error, response, body){
request('https://webcrawlerbackend.azurewebsites.net/api/searchNotificationsInTime?startDate=01-01-1000&endDate='+value11, function (error, response, body) {
  if (!error && response.statusCode == 200) {
	  response2 = body ;
	  console.log("TEST:STATE NAME IS  "+value1);
	  console.log("TEST:CITY NAME IS  "+value2);
		console.log("TEST:AREA NAME IS  " +value3);
		console.log("TEST:FROM DATE IS  " +value10);
		console.log("TEST:TO DATE IS"+value9);
    console.log(body); // Print the body of response.
	res.end(body);
  }
})
   //console.log("hi" + response2);
   //res.end(JSON.stringify(response2));
  
});

app.post("/post1", function (req, res) {
	    
     var var1=req.body.sName;
	 console.log(var1);
	 var request=require('request');
	 request('https://webcrawlerbackend.azurewebsites.net/api/searchNotificationOnTags?tags='+var1, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Print the body of response.
	res.end(body);
  }
})
    
});

app.listen(3000);