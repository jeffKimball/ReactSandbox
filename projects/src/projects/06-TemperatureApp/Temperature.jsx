import React, { useState } from "react";
import Button from "../components/Button";

const Temperature = () => {

    const [temp, setTemp] = useState(0)

    const increaseTemp = () => {
        setTemp(prev => prev + 1)
    }
    const decreaseTemp = () => {
        setTemp(prev => prev - 1)
    }
    return (
        <div className="container mt-3 text-center">
            <div className="card bg-light m-auto" style={{ width: 200 }}>
                <h1
                    className={`text-light card border-50  ${temp > 0 ? "bg-danger" : "bg-info"}`}
                    style={{
                        height: 150,
                        width: 150,
                        border: "2px solid #666",
                    }}
                >
                    {temp}&deg;C
                </h1>
                <div className="d-flex my-2">
                    <Button
                        text="-"
                        btnClass={"btn-lg"}
                        onClick={decreaseTemp}
                    />
                    <Button
                        text="+"
                        btnClass={"btn-lg"}
                        onClick={increaseTemp}
                    />
                </div>
            </div>
        </div>
    );
};

export default Temperature;
