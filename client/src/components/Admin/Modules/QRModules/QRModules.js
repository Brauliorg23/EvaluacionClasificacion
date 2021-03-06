import React from "react";
import QRCode from "react-qr-code";
import "./QRModules.scss";
export default function QRModules(props) {
    const {module} = props;
    
    return (
      <div className="QR">
        <header className="QR-header">
          <QRCode className="QR-header-code" value={module._id} size={256} bgColor="#282c34" fgColor="#fff" level="H" />
        </header>
      </div>
    );
}
