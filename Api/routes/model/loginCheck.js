const con = require('../utils/connect');


exports.signin = function(request,callback){
    console.log("working MODEL-signin");

    const vals = "email = "+"'"+request.body.email+"' and password = "+"'"+request.body.pass+"'";
	const sql = "select * from user where "+vals;

    con.executeQuery(sql, callback);
}

