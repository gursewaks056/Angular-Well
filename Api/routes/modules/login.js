const router = require('express').Router();
const loginCtrl = require("../controller/login");

router.route('/signup')

    .post(loginCtrl.signup);


module.exports=router;