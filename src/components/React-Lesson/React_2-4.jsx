import React, { Component } from 'react';


import css from './React_2-4.module.css';


//-----------------------------------------------------
export const React_2_4 = () => {
    console.log("React_2-4:");
    console.log("React_3-5:");

    //! Контролируемые элементы
    class ControlledForm extends Component {
        state = {
        inputValue: "",
        };

        handleChange = evt => {
            this.setState({ inputValue: evt.target.value });
            console.log("inputValue:", evt.target.value);
        };

        componentDidMount() {
            console.log("ControlledForm --> componentDidMount");
        }

        componentDidUpdate() {
            console.log("ControlledForm --> componentDidUpdate");
        }

        render() {
            console.log("ControlledForm --> Render");

            const { inputValue } = this.state;
            return (
            <input type="text" value={inputValue} onChange={this.handleChange} />
            );
        }
        
    }


    //! Сложные формы
    class ComplexForm extends Component {
        state = {
            login: "",
            trigger: true,
        };

    // Отвечает за обновление состояния
        handleChange = evt => {
            this.setState({ login: evt.target.value });
            console.log("login:", evt.target.value);
        };

        // Вызывается при отправке формы
        handleSubmit = evt => {
            evt.preventDefault();
            console.log(`Signed up as: ${this.state.login}`);
            //! Проп который передается форме для вызова при сабмите (пока отключен)
            // this.props.onSubmit({ ...this.state });
            this.setState({ trigger: false });
            
        };

        componentDidMount() {
            console.log("ComplexForm --> componentDidMount");
        }

        componentDidUpdate() {
            console.log("ComplexForm --> componentDidUpdate");
        }

        componentWillUnmount() {
            console.log("ComplexForm --> componentWillUnmount");
        }

        

        render() {
            console.log("ComplexForm --> Render");
            console.log(`trigger: ${this.state.trigger}`)

            const { login } = this.state;
            const { trigger } = this.state;

            return (
                <form
                    className={trigger ? css.complexFormForm :css.complexFormFormNone1}
                    onSubmit={this.handleSubmit}>
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
            <ControlledForm />
            <br />
            <ComplexForm />
        </>
    )
}
