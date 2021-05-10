import React, { useState } from "react"
import { useTranslation } from 'react-i18next';
import "./preparation-add-row-component.styles.css"

const PreparationAddRow = ({ id }) => {

    const [ings, setIngs] = useState(0);

    function IngredientsRender() {
        const ingsRender = []
        for (let i = 0; i < ings; i++) {
            ingsRender.push(<input
                id={`PAR-ACT-${id}-ING-${i}`}
                type="text"
                className="form-control"
                placeholder={t("Ingredient To Use")}
                aria-label="Amount (in grams)"
                aria-describedby="basic-addon1" />)
        }
        return ingsRender;
    }

    const { t } = useTranslation();

    return (
        <div id="preperation-instructions" className="row">
            <div className="d-flex">
                <input id={`PAR-ACT-${id}`} type="text" className="form-control" placeholder={t("Action_Name")} aria-label="Ingredient Name" aria-describedby="basic-addon1" />
                {IngredientsRender()}
                <button type="button" className="btn btn-success" onClick={() => { setIngs(ings + 1) }}>+</button>
            </div>
        </div>
    );
}

export default PreparationAddRow;