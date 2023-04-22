import React, { Component } from 'react';


// import css from './React_2-4.module.css';


//-----------------------------------------------------
export const React_2_4 = () => {
    console.log("React_2-4:");

    //! Контролируемые элементы
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


    //! Сложные формы
    class SignUpForm extends Component {
        state = {
        login: "",
        };

    // Отвечает за обновление состояния
        handleChange = e => {
            this.setState({ login: e.target.value });
        };

        // Вызывается при отправке формы
        handleSubmit = evt => {
            evt.preventDefault();
            console.log(`Signed up as: ${this.state.login}`);

        // Проп который передается форме для вызова при сабмите
        this.props.onSubmit({ ...this.state });
        };

        render() {
            const { login } = this.state;

            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                    <input
                        type="text"
                        placeholder="Enter login"
                        value={login}
                        onChange={this.handleChange}
                    />
                    </label>

                    <button type="submit">Sign up as {login}</button>
                </form>
            );
        }
    }

    // ReactDOM.render(
    //     <SignUpForm onSubmit={values => console.log(values)} />,
    //     document.getElementById("root")
    // );

    
    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"React_2-4"} ---->`}</p>
            <React24 />
            <br />
            <SignUpForm />
        </>
    )
}
