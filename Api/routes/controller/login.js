const loginModel = require("../model/login");

exports.signup = function(req,res){
    console.log("working--controller");

    loginModel.signup(req,function(err,result){

        if(err) console.log(err);
        if(result) console.log(result);

        console.log('hello');

    })

}