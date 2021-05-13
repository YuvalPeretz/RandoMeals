import mongoose from "mongoose";
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    preperations: {
        type: Array,
        required: true
    }
}, { timestamps: true });

const recipeModel = mongoose.model("recipes", recipeSchema);

export default recipeModel;