import React from "react";
import i18next from "i18next";
import "./header-lng-btn-component.styles.css";
import "flag-icon-css/css/flag-icon.min.css"

const LngBtn = ({ lang }) => {
    return (
        <div>
            <button
                className="lng-btn"
                onClick={() => {
                    i18next.changeLanguage(`${lang.lng}`)
                    document.body.dir = lang.dir
                }}>
                <span className={`flag-icon flag-icon-${lang.flag}`}></span>
                {lang.flng}
            </button>
        </div>
    );
}

export default LngBtn;