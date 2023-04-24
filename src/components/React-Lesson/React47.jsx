// import React, { Component } from 'react';
import { useState } from "react";

// import css from './React_4-7.module.css';


//-----------------------------------------------------
export const React47 = () => {
    console.log("React_4-7:");

    const [value, setValue] = useState(0);



    
    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"React_4-7"} ---->`}</p>
            <div>
                {value}
                <button type="button" onClick={() => setValue(value + 1)}>
                    Increment value by 1
                </button>
            </div>
        </>
    )
}
