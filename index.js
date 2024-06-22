import express from "express";

const app = express();
const port = process.env.PORT || 8000; 

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("page1")
})

app.listen(port, () => console.log(`Successfully Connected to ${port}`))