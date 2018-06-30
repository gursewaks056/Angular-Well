const mysql = require('mysql');

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

exports.executeQuery = function(sql, callback){
    console.log(sql);
    con.query(sql,callback);
};
