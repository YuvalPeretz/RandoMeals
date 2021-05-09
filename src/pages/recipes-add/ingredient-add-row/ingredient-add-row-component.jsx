import React from "react"
import { useTranslation } from 'react-i18next';
import "./ingredient-add-row-component.styles.css";

const RecipeAddRow = ({ id }) => {

    const { t } = useTranslation();

    return (
        <div className="row">
            <div className="d-flex">
                <input id={`IAR-ING-${id}`} type="text" className="form-control" placeholder={t("Ingredient_Name")} aria-label="Ingredient Name" aria-describedby="basic-addon1" />
                <input id={`IAR-AMT-${id}`} type="number" className="form-control" placeholder={`${t("Amount")} (in grams)`} aria-label={`${t("Amount")} (in grams)`} aria-describedby="basic-addon1" />
            </div>
        </div>
    );
}

export default RecipeAddRow;