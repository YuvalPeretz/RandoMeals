import React from "react";
import { ReactComponent as GloveIcon } from "../../assets/icons/globe.svg"
import LngBtn from "../header-lng-btn/header-lng-btn-component";
import "./header-lng-component.styles.css"

const LanguageBtn = () => {

    const Lngs = {
        en: {
            lng: "en",
            flng: "English",
            dir: "ltr",
            flag: "us"
        },
        he: {
            lng: "he",
            flng: "עברית",
            dir: "rtl",
            flag: "il"
        },
        ar: {
            lng: "ar",
            flng: "عربيه",
            dir: "rtl",
            flag: "sa"
        }
    }

    return (
        <div className="btn-group globeIcon">
            <GloveIcon data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu">
                {Object.keys(Lngs).map(lang => {
                    return (
                        <li key={`li-lang-${lang}`}>
                            <LngBtn lang={Lngs[lang]} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default LanguageBtn;