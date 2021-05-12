import express from "express";
import cors from "cors";

const app = express();
const dbCS = "mongodb+srv://randomeals:itsallfood@randomealscluster0.9zbth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get("/", cors(), (req, res) => {
    res.send("worked1")
})

app.set("/:recipeqrcode", (req, res) => {
    res.send("worked")
})

app.listen(3001);