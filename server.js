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
app.use(express.static("public"))

//api paths
const userNotes = require('./db/db.json')
console.log(userNotes)

//path to read notes from the db json file
app.get("/api/notes", function (req, res) {
    
    //uses map to add an id number to each value in the notes array
    res.json(userNotes.map((notes, i) => ({...notes, id: i + ""})))
})


//post request to post new notes
app.post("/api/notes", function (req, res) {

    //get the data from the request which is a new note
    let newNote = req.body
    //add it to the db.json file

    const userNotes = require('./db/db.json')
    console.log(userNotes)
    userNotes.push(newNote)
    fs.writeFile("./db/db.json", JSON.stringify(userNotes), function (err) {
        if (err) {
            res.send("failed to save note")
        }
        else {
            res.json(newNote)
        }
    })

})

app.delete("/api/notes/:id", (req, res) => {

    const userNotes = require('./db/db.json')

    userNotes.splice(req.params.id, 1)
   
    fs.writeFileSync("./db/db.json", JSON.stringify(userNotes, null, '\t'))
    res.json(userNotes)
});

//html paths

// path to get to our notes page
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"))

})

// path for our home page
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
    console.log("yes")

})



app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT)


})




