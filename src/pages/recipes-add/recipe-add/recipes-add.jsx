import React, { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next';
import IngredientAddRow from "../ingredient-add-row/ingredient-add-row-component"
import "./recipes-add.styles.css"
import PreparationAddRow from '../preparation-add-row/preparation-add-row-component';

const RecipesAdd = () => {
    const [lngs, setLngs] = useState({
        en: {},
        ar: {},
        he: {}
    })

    const [ings, setIngs] = useState(0);
    const [prep, setPrep] = useState(0);

    const { t } = useTranslation();

    async function GetLangs() {
        await fetch("/locales/en/translation.json")
            .then(lng => lng.json())
            .then(json => setLngs(prevState => ({ ...prevState, en: json })))
        await fetch("/locales/he/translation.json")
            .then(lng => lng.json())
            .then(json => setLngs(prevState => ({ ...prevState, he: json })))
        await fetch("/locales/ar/translation.json")
            .then(lng => lng.json())
            .then(json => setLngs(prevState => ({ ...prevState, ar: json })))
    }

    function IngredientsRender() {
        const ingsRender = []
        for (let i = 0; i < ings; i++) {
            ingsRender.push(<IngredientAddRow id={`${i}`} />)
        }
        return ingsRender;
    }

    function PreperationsRender() {
        const prepRender = []
        for (let i = 0; i < prep; i++) {
            prepRender.push(<PreparationAddRow id={`${i}`} />)
        }
        return prepRender;
    }

    function AddRecipe() {
        const newRecipe = {
            Title: document.getElementById("recipe-title").value,
            Ingredients: [],
            Preperations: []
        }
        let newPreperation = ""
        for (let i = 0; i < ings; i++) {
            newRecipe.Ingredients.push([document.getElementById(`IAR-ING-${i}`).value, document.getElementById(`IAR-AMT-${i}`).value])
        }
        for (let i = 0; i < prep; i++) {
            newPreperation = [document.getElementById(`PAR-ACT-${i}`).value, []]
            const prepIngs = [];
            let ingIndex = 0;
            while (document.getElementById(`PAR-ACT-${i}-ING-${ingIndex}`) !== null) {
                prepIngs.push(document.getElementById(`PAR-ACT-${i}-ING-${ingIndex}`).value)
                ingIndex++;
            }
            newPreperation[1] = prepIngs;
            newRecipe.Preperations.push(newPreperation);
        }
        console.log(newRecipe);
    }

    useEffect(() => { GetLangs() }, [])

    return (
        <div id="recipes-add" className="container">
            <div className="row">
                {`${t("Recipe_Title")}`}:
                <input id="recipe-title" type="text" className="form-control" placeholder={`${t("Recipe_Title")}`} aria-label={`${t("Recipe_Title")}`} aria-describedby="basic-addon1" />
            </div>
            <div id="ingredients" className="row">
                {t("Ingredients")}:
                <div className="container">
                    {IngredientsRender()}
                    <div className="row container">
                        <div className="col">
                            <button onClick={() => setIngs(ings - 1)} type="button" className="btn btn-danger">Remove Last</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-success" onClick={() => setIngs(ings + 1)}>Add Ingredient</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="preparations" className="row">
                {t("Preparations")}:
                <div className="container">
                    {PreperationsRender()}
                    <div className="row container">
                        <div className="col">
                            <button onClick={() => setPrep(prep - 1)} type="button" className="btn btn-danger">Remove Last</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-success" onClick={() => setPrep(prep + 1)}>Add Step</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <button type="button" className="btn btn-primary" onClick={() => AddRecipe()}>Add Recipe</button>
            </div>
        </div>
    );
}

export default RecipesAdd;