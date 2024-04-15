const express = require ('express');
const app = express();
const cors = require("cors");
const PORT = 3002;
require('dotenv').config();
const flightI = require("./functions")
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const store = new session.MemoryStore();


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(session({
    name: 'login',
    secret: 'uli',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000* 60 * 60 * 24,
        sameSite: true,
    },
    store: store
}))


app.get("/", (req, res) =>{
    res.send("Hello World");
});


app.get(`/flights/:flightNumber`, (req, res) =>{
    let {flightNumber} = req.params;
    console.log(flightNumber);
    flightI.flightInformation(flightNumber).then(info => {
        res.json({info});
        console.log(info);
    }).catch(error => {
        console.log(error)
    });
    
});



app.post(`/register`, (req, res) =>{
    let usName = req.body.username;
    let passW = req.body.password;
    let message = ""
    flightI.register(usName, passW).then(retVal =>{
        retVal === 1 ? message = "Successful" : message = "Unsucessful"
        res.json({registerStatus: message});
    }).catch(error =>{
        console.log(error);
        res.status(500).json({err: error})
    })
});

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.D_PASS,
    database: 'swoosh',
}).promise();


app.post(`/login`, async(req, res) =>{
    let usName = req.body.username;
    let passW = req.body.password;
    let returned = flightI.login(usName,passW)
       if(returned){
       console.log(store);
    //    console.log(req.sessionID);
    //    console.log(store);
       req.session.user = usName;
       console.log(req.session);
    //    console.log(req.session.user);
       res.json({userExists: returned, user: usName});
       }
       else{
        res.json({userExists: false});
       }
    
});

app.get(`/login`, (req, res) =>{
    if(req.session.user){
        res.json({loggedIn: true, user: req.session.user});
    }
    else{
        res.json({loggedIn: false})
    }
});



app.listen(PORT, () =>{
    console.log(`WE ARE LISTENING on port ${PORT}`);
})









