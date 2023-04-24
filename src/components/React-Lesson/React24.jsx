import React, { Component } from 'react';


import css from './React_2-4.module.css';


//-----------------------------------------------------
export const React24 = () => {
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
            const { inputValue } = this.state;
            this.setState({ inputValue: inputValue + 1 });
            console.log("componentDidMount --> this.state:", this.state.inputValue);
        }

        componentDidUpdate(prevProps, prevState) {
            console.log("ControlledForm --> componentDidUpdate");
            if (this.state.inputValue !== prevState) { 
            console.log("Обновилось поле inputValue");
            console.log("prevProps:", prevProps);
            console.log("prevState:", prevState);
            console.log("componentDidUpdate --> this.state:", this.state.inputValue);
            }
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

//! Вопрос Юлии №4
    class MyComponent4 extends Component {
        constructor(props) {
            super(props);
            this.state = {
            data: []
            };
        }

        componentDidMount() {
            console.log("componentDidMount(Вопрос Юлии №4) --> componentDidMount")
            const { data } = this.state;
            data.push(1);
            this.setState({ data: [...data, 2] });
        }

        render() {
            console.log("Вопрос Юлии №4");
            return (
            <div>
                <h1>{this.props.title}</h1>
                {this.state.data.map((item, index) => (
                    <p
                        key={index}
                    >
                        {`index: ${index} --> item: ${item}`}
                    </p>
                ))}
            </div>
            );
        }
    }

    
    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"React_2-4"} ---->`}</p>
            <ControlledForm />
            <br />
            <ComplexForm />
            <br />
            <MyComponent4 />
        </>
    )
}
