import React from "react"
import "./qr-component.styles.css";
import { ReactComponent as QRIcon } from "../../../assets/icons/qr-icon.svg"
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg"
import { useTranslation } from 'react-i18next';

const QRScan = () => {

    const { t } = useTranslation();

    return (
        <div id="qr-scan">
            <QRIcon id="qr-icon"/>
            <div className="d-flex">
                <input type="text" className="form-control" placeholder={t("QR Code")} aria-label="QR Code" aria-describedby="button-addon2"></input>
                <SearchIcon type="button" id="search-btn" />
            </div>
        </div>
    );
}

export default QRScan;