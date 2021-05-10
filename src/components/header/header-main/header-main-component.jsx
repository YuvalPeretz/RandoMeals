import React from "react";
import { useTranslation } from "react-i18next";
import "./header-main-component.styles.css"
import LanguageBtn from "../header-lng/header-lng-component";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="container">
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-outline-primary">{t("Download_Recipes")}</button>
                </div>
                <div className="col">
                    <p className="title" type="button">{t("RandoMeals")}</p>
                </div>
                <div className="col">
                    <LanguageBtn />
                </div>
            </div>
        </header>
    );
}

export default Header;