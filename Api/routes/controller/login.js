const loginModel = require("../model/signup");
const loginCheckModel = require("../model/loginCheck");

exports.signup = function(req,res){       // signup user
    console.log("working--controller");

    loginModel.signup(req,function(err,result){

        if(err) console.log(err);
        if(result) console.log(result);

        console.log('hello-signup');

    })
}

exports.signin = function(req,response){              // login check
    console.log("working--controller");

    loginCheckModel.signin(req,function(err,result){

        if(err){
            throw err;  
        } 

        if(Object.keys(result).length === 0){
            console.log('No match found');
            response.send({status: 404, message:'not found'});
        }
        else{
            console.log('Match found');
            console.log('result --- ',result[0]['name']);
            response.send({status: 200, message:'success', name : result[0]['name'], phone : result[0]['phone'], email : result[0]['email'] });                
        }

        console.log('hello-signin');

    })

}