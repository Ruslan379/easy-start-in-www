

import css from './JS_4-8.module.css';


//-----------------------------------------------------
export const JS_4_8 = () => {
    console.log("JS_4-8:");


    //! Продвинутый reduce
    const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

const getTags = tweets =>
    tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
    } , []);

const tags = getTags(tweets);

//! Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
//! Это стандартная практика если callback-функция довольно большая.

//! Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
//! то создаем его и записывает ему значение 0.
//! В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//     }
//     acc[tag] += 1;
//     return acc;
// };

//! Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});
    
const countTags = tags => tags.reduce((acc, tag) => {
    if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
    }
    acc[tag] += 1;
    return acc;
}, {});

const tagCount = countTags(tags);
console.log("tagCount:", tagCount);
    
const tagCountArr = [tagCount]


    return (
        <>
            <p style={{ color: "tomato" }}>{`<---- ${"JS_4-8"} ---->`}</p>
            {/* Продвинутый reduce */}
            <ul className={css.rgbList}>
                {tagCountArr.map(({css: cssNew, html, js, nodejs, react}, index) => (
                    <li key={index} className={css.rgbItem}>
                        {/* <h3>{`----------- ${index} -----------`}</h3> */}
                        <p className={css.rgbTextRed}>
                            {`css: ${cssNew}`}
                        </p>
                        <p className={css.rgbTextGreen}>
                            {`html: ${html}`}
                        </p>
                        <p className={css.rgbTextBlue}>
                            {`js: ${js}`}
                        </p>
                        <p className={css.rgbTextOrange}>
                            {`nodejs: ${nodejs}`}
                        </p>
                        <p className={css.rgbTextTeal}>
                            {`react: ${react}`}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}
