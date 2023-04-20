

import css from './JS_4-7.module.css';


//-----------------------------------------------------
export const JS_4_7 = () => {
    console.log("JS_4-7:");

    //! Псевдомассив arguments у стрелочных функций:
    console.log("Псевдомассив arguments у стрелочных функций:");
    
    const add = (...args) => {
        console.log("...args -->:", args); // [1, 2, 3]
        return args
    };

    const argsArr = add(1, 2, 3, 4, 5)
    console.log("...args:", argsArr);  // [1, 2, 3]

    //! IIFE - работает
    // ((...args) => {
    //     console.log("...args:", args); // [1, 2, 3]
    //     return args
    // })(1, 2, 3, 4, 5);
    


    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"JS_4-7"} ---->`}</p>
            {/* Псевдомассив arguments у стрелочных функцийв */}
            <ul className={css.rgbList}>
                {argsArr.map((item, index,) => (
                    <li key={index} className={css.rgbItem}>
                        <h3>{`----------- ${index} -----------`}</h3>
                        <p className={css.rgbTextGreen}>
                            {`item: ${item}`}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}
