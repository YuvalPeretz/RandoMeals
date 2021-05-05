import React from "react";
import { useTranslation } from "react-i18next";
import "./header-component.styles.css"

const Header = () => {
    const { t } = useTranslation();

    return (
        <header>
            <button type="button" className="btn btn-outline-primary">{t("Download Recipes")}</button>
        </header>
    );
}

export default Header;