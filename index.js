// jshint esversion:6 
import express from "express";
let app = express();
const port = process.env.PORT || 8000; 
app.set("view engine", "ejs");
app.use(express.static("public"));
// var myScripts = path('/path/to/myScripts');
// app.use(express.static(path.join(__dirname, 'views/script.js')));

app.get("/", function (req, res) {
    res.render("page1");
})

app.listen(port, () => console.log(`Successfully Connected to ${port}`))