const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const loginModule = require("./routes/modules/login");



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : false}));



app.use("/login", loginModule); // login -> signin, signup


app.listen('4201', 'localhost');
