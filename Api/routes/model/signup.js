const con = require('../utils/connect');


exports.signup = function(request,callback){
    console.log("working MODEL-signup");

	const vals = "('"+ request.body.name+"',"+"'"+ request.body.phone+"',"+"'"+ request.body.email+"',"+"'"+ request.body.pass+"');";
	 
	const sql = "insert into user (name, phone, email, password ) values "+vals;
    con.executeQuery(sql, callback);	
}

