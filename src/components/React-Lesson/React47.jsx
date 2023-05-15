// import React, { Component } from 'react';
import { useState } from "react";
import { useEffect } from "react";

// import css from './React47.module.css';


//-----------------------------------------------------
export const React47 = () => {
    console.log("React_4-7:");

    //! Хук useState
    const [value, setValue] = useState(0);

     //! Хук useEffect
    useEffect(() => {
        document.title = `You clicked ${value} times`;
    });

    
    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"React_4-7"} ---->`}</p>
            {/* Хук useState */}
            <div>
                {value}
                <button
                    type="button"
                    onClick={() => setValue(value + 1)}
                >
                    Increment value by 1
                </button>
            </div>
            {/* Хук useEffect */}
            <div style={{ display: "flex" }}>
                <p>You clicked {value} times</p>
                <button onClick={() => setValue(value + 1)}>Click me</button>
            </div>
        </>
    )
}
