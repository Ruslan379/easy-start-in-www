import {
    useState,
    // useEffect
} from 'react';

import css from './Html_2-3.module.css';


//-----------------------------------------------------
export const HTML_2_3 = () => {
    console.log("HTML_2-3:");
    const [isSuccess, setIsSuccess] = useState(false);

    const sectionText1 = (
        <section className={css.section}>
            <h1 className={css.sectionTitle}>Section title</h1>
        </section>
    );

    // let isSuccess
    // isSuccess = true;
    // isSuccess = false;

    const toggleTrigger = () => {
        setIsSuccess(!isSuccess);
    }


    return (
        <>
            <p style={{ color: "tomato" }}>{`<--+-- ${"HTML_2-3"} --+-->`}</p>
            {/* <br /> */}
            <p style={{ color: "red" }}>{`В этом примере текст "Введите ваше имя: " является кликабельным, и при нажатии на него фокус перейдет на поле ввода с идентификатором "myInput"`}</p>
            <label for="myInput">Введите ваше имя: </label>
            <input type="text" id="myInput" name="name" />
            <p style={{ color: "red" }}>{`<---- ${"final"} ---->`}</p>
            {/* <br /> */}
            <div>
                <span className={css.spanBlock}>Это строковый элемент-1 (span)</span>
                <span className={css.spanBlock}>Это строковый элемент-2 (span)</span>
            </div>
            {sectionText1}
            <br />
            <section className={css.section}>
                <h1 className={`${css.sectionTitle} ${css.fontSizeColorTitle}`}>Section title</h1>
            </section>
            <br />
            <button
                className={
                    `${css.buttonAlert} ${css.alert} ${isSuccess
                        ?
                        `${css.success} ${css.successBackgroundColor} ${css.buttonAlertBefore}`
                        :
                        // css.error
                        `${css.error} ${css.errorBackgroundColor}`
                    }
                    `
                }
                onClick={toggleTrigger}
            >
                {isSuccess ? "Пополнение счёта выполнено" : "Пополнение счёта НЕ выполнено"}
            </button>
            {/* <p className={`${css.alert} ${css.success}`}>Пополнение счёта выполнено</p> */}

            <p
                className={`${css.alert} ${isSuccess ? css.success : css.error}`}
            >
                {/* Пополнение счёта выполнено */}
                {isSuccess ? "Пополнение счёта выполнено" : "Пополнение счёта НЕ выполнено"}
            </p>
            <p className={`${css.alert} ${css.warning}`}>Внимание, будут изменены тарифы</p>
            <p className={`${css.alert} ${css.error}`}>Ошибка проведения транзакции</p>
            <p id={css.textId}>Текст с селектором id (#)</p>
        </>
    )
}
