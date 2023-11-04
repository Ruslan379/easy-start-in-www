
import css from './Html_2-3_Question_Julia.module.css';


//-----------------------------------------------------
export const HtmlQuestion3Julia = () => {
    console.log("HtmlQuestion3Julia:");

    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"HtmlQuestion3Julia"} ---->`}</p>
            {/* Чи є дана розмітка дійсною? - НЕТ*/}
            {/* <div>
                    <p>
                        <div>
                        <p>
                        </p>
                    </p>
                        </div>
                </div > */}

            <div className={css.mainLinks}>
                <a href="https://www.google.com.ua">Читайте наш блог!</a>
                <ul className={css.socialLinks}>
                    <li className={css.socialItems}>
                        <p className={css.socialText}>Twitter</p>
                        <a href="https://www.google.com.ua">Twitter-1</a>
                        <br />
                        <a href="https://www.google.com.ua">Twitter-2</a>
                        <br />
                        <a href="https://www.google.com.ua">Twitter-3</a>
                    </li>
                    <li>
                        <p className={css.socialText}>Instagram</p>
                        <a href="https://www.google.com.ua">Instagram-1</a>
                        <br />
                        <a href="https://www.google.com.ua">Instagram-2</a>
                        <br />
                        <a href="https://www.google.com.ua">Instagram-3</a>
                    </li>
                    <li>
                        <p className={css.socialText}>Facebook</p>
                        <a href="https://www.google.com.ua">Facebook-1</a>
                        <br />
                        <a href="https://www.google.com.ua">Facebook-2</a>
                        <br />
                        <a href="https://www.google.com.ua">Facebook-3</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
