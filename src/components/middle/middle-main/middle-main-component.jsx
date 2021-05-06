import React from "react"
import "./middle-main-component.styles.css"
import QRScan from '../middle-qr/qr-component';

const MiddleMain = () => {
    return(
        <div id="middle-main" className="d-flex justify-content-center align-items-center">
            <QRScan />
            <div className="seperator"/>
        </div>
    );
}

export default MiddleMain;