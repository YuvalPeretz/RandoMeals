import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import recipeModel from "./model/recipe/recipe-model.js"

const app = express();
const dbCS = "mongodb+srv://randomeals:itsallfood@randomealscluster0.9zbth.mongodb.net/randomeals?retryWrites=true&w=majority";

mongoose.connect(dbCS, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => result ?
        console.log("Connected to MongoDB") +
        app.listen(3001, err => err ?
            console.log(err) :
            console.log("Server listening on PORT", 3001)
        ) :
        null)
    .catch(err => err ? console.log() : null)

app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/:recipeqrcode", (req, res) => {
})

app.post("/addrecipe", (res, req) => {
    const { Title, Ingredients, Preperations } = res.body;
    const recipe = new recipeModel({
        title: Title,
        ingredients: Ingredients,
        preperations: Preperations
    })

    recipe.save();
})