

import css from './JS_3-6.module.css';


//-----------------------------------------------------
export const JS_3_6 = () => {
    // const rgb = [200, 255, 100];
    // const [red, green, blue] = rgb;


    // const rgbArr = {
    //     red,
    //     green,
    //     blue
    // }

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
            // rgbArr.push(rgbObj);
            rgbArr = [...rgbArr, rgbObj];
        }
    };

    makeAnArray(10, 20, 30)

    console.log("JS_3_6:");
    // console.log(`R:${red}, G:${green}, B:${blue}`); // "R:200,G:255,B:100"
    console.log("rgbArr:", rgbArr); // rgbArr: {red: 200, green: 255, blue: 100}
    


    return (
        <>
        {/* {`R:${red},  G:${green},  B:${blue}`} */}
        <ul className={css.rgbList}>
            {rgbArr.map(({ red, green, blue }, index,) => (
                <li key={index} className={css.rgbItem}>
                    <p>{`----------- ${index} -----------`}</p>
                    <p className={css.rgbText}>
                        {`Red: ${red}`}
                    </p>
                    <p className={css.rgbText}>
                        {`Green: ${green}`}
                    </p>
                    <p className={css.rgbText}>
                        {`Blue: ${blue}`}
                    </p>
                </li>
            ))}
        </ul>
        </>
    )
}
