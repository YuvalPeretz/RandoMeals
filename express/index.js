import express from "express";

const app = express();
const dbCS = "mongodb+srv://randomeals:itsallfood@randomealscluster0.9zbth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.set("/:recipeqrcode", (req, res) => {
    res.send("worked")
})

app.listen(3001);