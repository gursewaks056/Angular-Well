const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : false}));

app.post('/loginCheck' , (request, response) => {
	console.log("working", request.body);

    const vals = "email = "+"'"+request.body.email+"' and password = "+"'"+request.body.pass+"'";
    console.log(vals);
	 
	const sql = "select * from user where "+vals;
	con.query(sql, function( err, result){
			if(err) throw err;
            console.log('Query Successful');			
            if(Object.keys(result).length === 0){
                console.log('No match found');
                response.send({status: 404, message:'not found'});
            }
            else{
                console.log('Match found');
                response.send({status: 200, message:'success'});                
            }
	});
	

});

app.listen('4202', 'localhost');
