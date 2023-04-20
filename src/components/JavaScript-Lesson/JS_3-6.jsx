

import css from './JS_3-6.module.css';


//-----------------------------------------------------
export const JS_3_6 = () => {
    console.log("JS_3-6:");

    let rgbObj = null
    let rgbArr = []

    function makeAnArray(redx, greeny, bluez) {
        for (let index = 0; index < 5; index++) {
            redx = redx + 1;
            greeny = greeny + 1;
            bluez = bluez + 1;
            const rgb = [redx, greeny, bluez];
            const [red, green, blue] = rgb;
        
            rgbObj = {
                red,
                green,
                blue
            };
            console.log("rgbObj:", rgbObj);
            console.log("rgbArr:", rgbArr);
            // rgbArr.push(rgbObj); //! 1-variant
            rgbArr = [...rgbArr, rgbObj]; //! 2-variant
        }
    };

    makeAnArray(10, 20, 30)

    
    console.log("rgbArr:", rgbArr); 
    


    return (
        <>
            {/* {`R:${red},  G:${green},  B:${blue}`} */}
            <p style={{color: "tomato"}}>{`<---- ${"JS_3_6"} ---->`}</p>
            <ul className={css.rgbList}>
                {rgbArr.map(({ red, green, blue }, index,) => (
                    <li key={index} className={css.rgbItem}>
                        <h3>{`----------- ${index} -----------`}</h3>
                        <p className={css.rgbTextRed}>
                            {`Red: ${red}`}
                        </p>
                        <p className={css.rgbTextGreen}>
                            {`Green: ${green}`}
                        </p>
                        <p className={css.rgbTextBlue}>
                            {`Blue: ${blue}`}
                        </p>
                    </li>
                ))}
            </ul>
        </>
    )
}
