// import {
//     useState,
//     // useEffect
// } from 'react';

import css from './Html_3-6.module.css';


//-----------------------------------------------------
export const HTML_36 = () => {
    console.log("HTML_3-6:");
    // const [isSuccess, setIsSuccess] = useState(false);

    

    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"HTML_3-6"} ---->`}</p>
            
            <ul className={css.menu}>
                <li className={css.item}><a href="https://www.google.com.ua" className={css.link}>Home page</a></li>
                <li className={css.item}><a href="https://www.google.com.ua" className={css.link}>Blog</a></li>
                <li className={css.item}><a href="https://www.google.com.ua" className={css.link}>Podcasts</a></li>
                <li className={css.item}><a href="https://www.google.com.ua" className={css.link}>Contacts</a></li>
            </ul>
            {/* <p className={`${css.alert} ${css.warning}`}>Внимание, будут изменены тарифы</p>
            <p className={`${css.alert} ${css.error}`}>Ошибка проведения транзакции</p>
            <p id={css.textId}>Текст с селектором id (#)</p> */}
        </>
    )
}
