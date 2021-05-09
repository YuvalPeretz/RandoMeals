import React from "react"
import "./middle-main-component.styles.css"
import QRScan from '../middle-qr/qr-component';

const MiddleMain = () => {
    return (
        <div id="middle-main" className="d-flex align-items-center">
            <div className="ad d-flex justify-content-start align-items-center">
                ad
            </div>
            <div className="middle-main d-flex justify-content-between align-items-center flex-grow-1">
                <QRScan />
                <div className="seperator" />
            </div>
            <div className="ad d-flex justify-content-end align-items-center">
                ad
            </div>
        </div>
    );
}

export default MiddleMain;