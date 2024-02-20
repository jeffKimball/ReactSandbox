import React from "react";
import Button from "./Button"

const popUpContainer = {
    position: "absolute",
    top: "0",
    height: "100vh",
    width: "100vw",
    background: "rgba(0, 0, 0, 0.1 )",
    zIndex: "-1",
}

const popUpStyle = {
    position: "relative",
    margin: "40 vh auto",
    zIndex: "1" 
}

const PopUp = ({ type, title, text, handleClose }) => {
    return <div style={popUpContainer}>
        <div className={`${type}`}>
            <div className="alert-close">
                <div className="d-flex flex-column">
                    <h4 className="mb-1">{title && title}</h4>
                    <p className="mb-1">{text && text}</p>
                </div>
                <Button btnClass={"btn-close"} text={"x"} onClick={handleClose}/>
            </div>
        </div>
    </div>;
};

export default PopUp;
