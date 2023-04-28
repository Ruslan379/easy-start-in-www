

// import css from './JS_5-9.module.css';


//-----------------------------------------------------
export const JS_5_9 = () => {
    console.log("JS_5-9:");

    //! this в методе объекта
    console.log("this в методе объекта:");

    function showThis() {
        console.log("this in showThis: ", this);
    }

    // Вызываем в глобальном контексте
    showThis(); // this in showThis: undefined

    let user = {
        username: "Mango",
    };

    // Записываем ссылку на функцию в свойство объекта
    // Обратите внимание, что это не вызов - нет ()
    // user.showContext = showThis; //!

    user = {
        username: "Mango",

        showContext() {
            console.log("this in showThis: ", this);
        },
    };

    // Вызываем функцию в контексте объекта
    // this будет указывать на текущий объект, в контексте
    // которого осуществляется вызов, а не на глобальный объект.
    user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}

    //! this в callback-функциях
    // console.log("this в callback-функциях:");

    // const customer = {
    //     firstName: "Jacob",
    //     lastName: "Mercer",
    //     getFullName() {
    //         return `${this.firstName} ${this.lastName}`;
    //     },
    // };

    // function makeMessage(callback) {
    //   // callback() это вызов метода getFullName без объекта
    //     console.log(`Обрабатываем заявку от ${callback()}.`);
    // }

    // makeMessage(customer.getFullName); //! Будет ошибка при вызове функции: Cannot read properties of undefined (reading 'firstName')


    //! this в стрелочных функциях
    console.log("this в стрелочных функциях:");

    const hotel = {
        username: "Resort hotel",
        showThis() {
            const foo = () => {
            // Стрелки запоминают контекст во время объявления,
            // из родительской области видимости
            console.log("this in foo: ", this);
        };

        foo();
            console.log("this in showThis: ", this);
        },
    };

    console.log("hotel: ", hotel); // hotel: {username: 'Resort hotel', showThis: ƒ}

    hotel.showThis();
    // this in foo: {username: 'Resort hotel', showThis: ƒ}
    // this in showThis: {username: 'Resort hotel',showThis: ƒ}

    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"JS_5-9"} ---->`}</p>
            {/* Продвинутый reduce */}
            
        </>
    )
}
