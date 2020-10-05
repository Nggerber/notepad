// npm packages
var express = require('express')
var path = require('path')
var fs = require('fs')

//tells node that we are creating an express server
const app = express()
const PORT = process.env.PORT || 3000




// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//html paths

// path to get to our notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"))

})

// path for our home page
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))

})

//api paths
const userNotes = require('./db/db.json')

//path to read notes from the db json file
app.get("/api/notes", function (req, res) {
    res.json(userNotes)
})


//post request to post new notes
app.post("/api/notes", function(req, res){



    
})

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)


})




