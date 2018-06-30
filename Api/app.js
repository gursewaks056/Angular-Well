const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const loginModule = require("./routes/modules/login");



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : false}));


const con  = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'MySQL###',
	database : 'new'
});


con.connect( function(err) {
		if(err) throw err;
		console.log('Connected');
});


app.use("/login", loginModule);

// app.post('/register' , (request, response) => {
// 	console.log("working", request.body);


	// const vals = "('"+ request.body.name+"',"+"'"+ request.body.phone+"',"+"'"+ request.body.email+"',"+"'"+ request.body.pass+"');";

	 
	// const sql = "insert into user (name, phone, email, password ) values "+vals;
	// con.query(sql, function( err, result){
	// 		if(err) throw err;
	// 		console.log('inserted 1 record');			
	// });

// 	response.send('working');

	

// });

app.listen('4201', 'localhost');
