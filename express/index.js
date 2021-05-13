import express from "express";
import cors from "cors";

const app = express();
const dbCS = "mongodb+srv://randomeals:itsallfood@randomealscluster0.9zbth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get("/:recipeqrcode", cors(), (req, res) => {
})

app.set("/addrecipe", cors(), (res, req) => {

})

app.listen(3001);