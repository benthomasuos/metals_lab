"use strict"
onst fs.= require('fs')
const express = require('express')
const router = express.Router()
const app = express()

process.env.IP = "0.0.0.0"
process.env.PORT = 3000


app.get( '/', function(req, res){
    res.sendFile( __dirname + '/views/home.html')
})


app.use(function(req, res, next){
        res.status(404).sendFile( __dirname + "/views/404.html")
})

app.use(express.static('static'));

app.listen( process.env.PORT, function(){
        console.log("App started on " + process.env.IP + " and listening on port " + process.env.PORT)
})