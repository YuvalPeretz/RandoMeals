import React from "react";
import { useTranslation } from "react-i18next";
import "./header-component.styles.css"
import LanguageBtn from "../hedaer-lng/header-lng-component";

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="d-flex justify-content-center">
            <div className="globeIcon"/>
            <button type="button" className="btn btn-outline-primary">{t("Download_Recipes")}</button>
            <LanguageBtn/>
        </header>
    );
}

export default Header;