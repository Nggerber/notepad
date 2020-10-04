// npm packages

var express = require('express')
var path = require('path')
var fs = require('fs')

//tells node that we are creating an express server

const app = express()
const PORT = process.env.PORT || 3000


// sets up the express app to handle data parsing

app.use(express.urlencoded({extended: true}))
app.use(express.json())
    


app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)


})




