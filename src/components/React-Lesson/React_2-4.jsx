import React, { Component } from 'react';


// import css from './React_2-4.module.css';


//-----------------------------------------------------
export const React_2_4 = () => {
    console.log("React_2-4:");

    class React24 extends Component {
        state = {
        inputValue: "",
        };

        handleChange = evt => {
            this.setState({ inputValue: evt.target.value });
            console.log("inputValue:", evt.target.value);
        };

        render() {
            const { inputValue } = this.state;
            return (
            <input type="text" value={inputValue} onChange={this.handleChange} />
            );
        }
        
    }

    
    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"React_2-4"} ---->`}</p>
            <React24 />
            <br />
        </>
    )
}
