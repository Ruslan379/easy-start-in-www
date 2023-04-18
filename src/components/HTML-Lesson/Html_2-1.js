import {
    useState,
    // useEffect
} from 'react';

import css from './Html_2-1.module.css';


//-----------------------------------------------------
export const SectionText = () => {
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
            {sectionText1}
            <br />
            <section className={css.section}>
                <h1 className={`${css.sectionTitle} ${css.fontSizeColorTitle}`}>Section title</h1>
            </section>
            <br />
            <button
                className={`${css.alert} ${isSuccess ? css.success : css.error}`}
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
        </>
    )
}
