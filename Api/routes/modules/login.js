const router = require('express').Router();
const loginCtrl = require("../controller/login");

router.route('/signup')
    .post(loginCtrl.signup);

router.route('/signin')
    .post(loginCtrl.signin);


module.exports=router;