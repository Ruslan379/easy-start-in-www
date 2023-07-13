import {
    useState,
    useEffect
} from 'react';

// import ringtone1 from 'sound/55031879babb424.mp3';
import ringtone2 from 'sound/car-alarm-deluxe-2.mp3';
// import ringtone3 from 'sound/chime-alarm.mp3';
// import ringtone4 from 'sound/button-digital_gkap8d4_.mp3';
import ringtone5 from 'sound/button-tonal_gydmp_eu.mp3';

import css from './PsychoMatrix.module.css';

//-----------------------------------------------------
export const PsychoMatrix = () => {
    console.log('PsychoMatrix:');

    const [trigger, setTrigger] = useState(false);

    const toggleTrigger = () => {
        setTrigger(!trigger);
    }

    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    const [dateOfBirthObj, setDateOfBirthObj] = useState({});
    // const [dateOfBirthObj, setDateOfBirthObj] = useState(null); //! использовать при рендере по условию: {dateOfBirthObj && ... }

    const [firstAddNumber, setFirstAddNumber] = useState(0);
    const [secondAddNumber, setSecondAddNumber] = useState(0);
    const [thirdAddNumber, setThirdAddNumber] = useState(0);
    const [fourthAddNumber, setFourthAddNumber] = useState(0);

    const [countObj, setCountObj] = useState({});

    const [showComponent1, setShowComponent1] = useState(false);
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);
    const [showComponent4, setShowComponent4] = useState(false);

    const [showComponent10, setShowComponent10] = useState(false);
    const [showComponent11, setShowComponent11] = useState(false);
    const [showComponent12, setShowComponent12] = useState(false);
    const [showComponent13, setShowComponent13] = useState(false);
    const [showComponent14, setShowComponent14] = useState(false);
    const [showComponent15, setShowComponent15] = useState(false);
    const [showComponent16, setShowComponent16] = useState(false);
    const [showComponent17, setShowComponent17] = useState(false);
    const [showComponent18, setShowComponent18] = useState(false);
    const [showComponent19, setShowComponent19] = useState(false);

    //! Матрица Судьбы
    // const [personalNumber1, setPersonalNumber1] = useState(0);
    // const [personalNumber2, setPersonalNumber2] = useState(0);
    // const [personalNumber3, setPersonalNumber3] = useState(0);
    // const [personalNumber4, setPersonalNumber4] = useState(0);

    // const [ancestralNumber1, setAncestralNumber1] = useState(0);
    // const [ancestralNumber2, setAncestralNumber2] = useState(0);
    // const [ancestralNumber3, setAncestralNumber3] = useState(0);
    // const [ancestralNumber4, setAncestralNumber4] = useState(0);

    // const [centralPersonalNumber, setCentralPersonalNumber] = useState(0);
    // const [centralAncestralNumber, setCentralAncestralNumber] = useState(0);


    //*------------------ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ------------------
    //! Преобразование числа в строку а затем в массив строк:
    const convertNumberToArray = (arr) => arr.toString().split("");

    //! Преобразование всех элементов массива (строк) в ЧИСЛО и СУММИРОВАНИЕ их:
    const convertToNumberAndSum = (arr) => arr.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

    //! Преобразование всех элементов массива (строк) в ЧИСЛО и запись в новый массив:
    const convertToNumber = (arr) => arr.map(element => Number(element));
    //*__________________ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ __________________

    //! ------- Для отрисовки компонентов с задержкой -------
    useEffect(() => {
        //! Доп числа
        const timer1 = setTimeout(() => {
            setShowComponent1(true);
            if (firstAddNumber) playSound2();
        }, 250);

        const timer2 = setTimeout(() => {
            setShowComponent2(true);
            if (firstAddNumber) playSound2();
        }, 500);

        const timer3 = setTimeout(() => {
            setShowComponent3(true);
            if (firstAddNumber) playSound2();
        }, 750);

        const timer4 = setTimeout(() => {
            setShowComponent4(true);
            if (firstAddNumber) playSound2();
        }, 1000);

        //! Психо-матрица
        const timer10 = setTimeout(() => {
            setShowComponent10(true);
            if (countObj[0]) playSound5();
        }, 1100);

        const timer11 = setTimeout(() => {
            setShowComponent11(true);
            if (countObj[1]) playSound5();
        }, 1200);

        const timer12 = setTimeout(() => {
            setShowComponent12(true);
            if (countObj[2]) playSound5();
        }, 1300);

        const timer13 = setTimeout(() => {
            setShowComponent13(true);
            if (countObj[3]) playSound5();
        }, 1400);

        const timer14 = setTimeout(() => {
            setShowComponent14(true);
            if (countObj[4]) playSound5();
        }, 1500);

        const timer15 = setTimeout(() => {
            setShowComponent15(true);
            if (countObj[5]) playSound5();
        }, 1600);

        const timer16 = setTimeout(() => {
            setShowComponent16(true);
            if (countObj[6]) playSound5();
        }, 1700);

        const timer17 = setTimeout(() => {
            setShowComponent17(true);
            if (countObj[7]) playSound5();
        }, 1800);

        const timer18 = setTimeout(() => {
            setShowComponent18(true);
            if (countObj[8]) playSound5();
        }, 1900);

        const timer19 = setTimeout(() => {
            setShowComponent19(true);
            if (countObj[9]) playSound5();
        }, 2000);

        return () => {
            //! Доп числа
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            setShowComponent1(false);
            setShowComponent2(false);
            setShowComponent3(false);
            setShowComponent4(false);
            //! Психо-матрица
            clearTimeout(timer10);
            clearTimeout(timer11);
            clearTimeout(timer12);
            clearTimeout(timer13);
            clearTimeout(timer14);
            clearTimeout(timer15);
            clearTimeout(timer16);
            clearTimeout(timer17);
            clearTimeout(timer18);
            clearTimeout(timer19);
            setShowComponent10(false);
            setShowComponent11(false);
            setShowComponent12(false);
            setShowComponent13(false);
            setShowComponent14(false);
            setShowComponent15(false);
            setShowComponent16(false);
            setShowComponent17(false);
            setShowComponent18(false);
            setShowComponent19(false);



        }; //! Очистка таймеров при размонтировании компонента
    }, [trigger, firstAddNumber, countObj]);

    const playSound2 = () => {
        const audio = new Audio(ringtone2);
        audio.play();
    };
    const playSound5 = () => {
        const audio = new Audio(ringtone5);
        audio.play();
    };
    //! _______ Для отрисовки компонентов с задержкой _______

    const handleChangeDay = evt => {
        setDay(evt.target.value);
    };

    const handleChangeMonth = evt => {
        setMonth(evt.target.value);
    };

    const handleChangeYear = evt => {
        setYear(evt.target.value);
    };



    //! Вызывается при отправке формы
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        console.log('Вызывается при отправке формы:');
        console.log(`SUBMIT--> День:${day}, Месяц:${month}, Год:${year}`); //!


        //! Создаем объект даты рождения --> dateOfBirthObj
        setDateOfBirthObj({
            day,
            month,
            year
        });


        //! Преобразуем все стейты в строки а затем в массивы строк:
        const dayAsArray = convertNumberToArray(day);
        const monthAsArray = convertNumberToArray(month);
        const yearAsArray = convertNumberToArray(year);


        //! "Сливаем" все массивы: dayAsArray, monthAsArray, yearAsArray в один массив dateOfBirthAsArray:
        const dateOfBirthAsArray = [
            ...dayAsArray,
            ...monthAsArray,
            ...yearAsArray
        ];
        // console.log("dateOfBirthAsArray:", dateOfBirthAsArray); //!


        //! ----------- firstAddNumber I-----------:
        //! Суммируем ВСЕ цифры массива dateOfBirthAsArray (дата рождения) и записываем в стейт firstAddNumber:
        const forFirstAddNumber = convertToNumberAndSum(dateOfBirthAsArray);
        // console.log("forFirstAddNumber:", forFirstAddNumber); //!
        setFirstAddNumber(forFirstAddNumber);


        //! ----------- secondAddNumber II -----------:
        //! Преобразуем число forFirstAddNumber в строку а затем в массив:
        const secondAddNumberAsArray = convertNumberToArray(forFirstAddNumber);
        // console.log("secondAddNumberAsArray:", secondAddNumberAsArray); //!

        //! Суммируем цифры массива secondAddNumberAsArray и записываем в стейт secondAddNumber
        const forSecondAddNumber = convertToNumberAndSum(secondAddNumberAsArray);
        // console.log("forSecondAddNumber:", forSecondAddNumber); //!
        setSecondAddNumber(forSecondAddNumber);


        //! ----------- thirdAddNumber III -----------:
        console.log("Number(dayAsArray[0]):", Number(dayAsArray[0])); //!
        console.log("Number(monthAsArray[0]):", Number(monthAsArray[0])); //!
        const forThirdAddNumber = Math.abs(forFirstAddNumber - 2 * Number((dayAsArray[0] === "0") ? monthAsArray[0] : dayAsArray[0]));
        console.log("forThirdAddNumber:", forThirdAddNumber); //!
        setThirdAddNumber(forThirdAddNumber);


        //! ----------- fourthAddNumber IV -----------:
        //! Преобразуем число forThirdAddNumber в строку а затем в массив:
        const fourthAddNumberAsArray = convertNumberToArray(forThirdAddNumber);
        // console.log("fourthAddNumberAsArray:", fourthAddNumberAsArray); //!

        //! Суммируем цифры массива forThirdAddNumberAsArray и записываем в стейт setFourthAddNumber
        const forFourthAddNumber = convertToNumberAndSum(fourthAddNumberAsArray);
        // console.log("forFourthAddNumber:", forFourthAddNumber); //!
        setFourthAddNumber(forFourthAddNumber);


        //! ----------- Преобразуем все  for****AddNumber (стейты) в строки а затем в массивы -----------:
        const firstAddNumberArray = convertNumberToArray(forFirstAddNumber);
        const secondAddNumberArray = convertNumberToArray(forSecondAddNumber);
        const thirdAddNumberArray = convertNumberToArray(forThirdAddNumber);
        const fourthAddNumberArray = convertNumberToArray(forFourthAddNumber);

        // console.log("firstAddNumberArray I:", firstAddNumberArray); //!
        // console.log("secondAddNumberArray II:", secondAddNumberArray); //!
        // console.log("thirdAddNumberArray III:", thirdAddNumberArray); //!
        // console.log("fourthAddNumberArray IV:", fourthAddNumberArray); //!


        //! "Сливаем" массив dateOfBirthAsArray (Дня рождения) и ВСЕ промежуточные массивы  ****AddNumberArray в один массив allAsArray:
        const allAsArray = [
            ...dateOfBirthAsArray,
            ...firstAddNumberArray,
            ...secondAddNumberArray,
            ...thirdAddNumberArray,
            ...fourthAddNumberArray
        ];
        console.log("allAsArray:", allAsArray); //!


        //! Преобразовываем все элементы массива allAsArray в число и записываем в новый массив allAsArrayNumber:
        const allAsArrayNumber = convertToNumber(allAsArray);
        // console.log("allAsArrayNumber:", allAsArrayNumber); //!


        //! Подсчитываем количество цифр в массиве dateOfBirthAsArrayNumber и записывем эти данные в объект countObj:
        const count = {};
        const countArr = {};

        for (let i = 0; i < allAsArrayNumber.length; i++) {
            const num = allAsArrayNumber[i];
            count[num] = count[num] ? count[num] + 1 : 1;
            countArr[num] = countArr[num] ? [...countArr[num], num] : [num];
        };
        console.log("count:", count); //!
        console.log("countArr:", countArr); //!
        setCountObj(countArr);


        setDay(0);
        setMonth(0);
        setYear(0);

        form.reset();
        toggleTrigger();
    };


    //* ---------------------------------------------------------------------------------

    console.log(`After SUBMIT--> День:${day}, Месяц:${month}, Год:${year}`); //!
    console.log("After SUBMIT--> dateOfBirthObj:", dateOfBirthObj); //!

    console.log("firstAddNumber I:", firstAddNumber); //!
    console.log("secondAddNumber II:", secondAddNumber); //!
    console.log("thirdAddNumber III:", thirdAddNumber); //!
    console.log("fourthAddNumber IV:", fourthAddNumber); //!

    console.log("FINAL--> countObj:", countObj); //!

    //* ---------------------------------------------------------------------------------

    //! Матрицы Судьбы
    //*------------------ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ Матрицы Судьбы ------------------
    //! Преобразование строки в ЧИСЛО
    //! Если ЧИСЛО > 22, то:
    //!    Преобразование числа в строку а затем в массив строк:
    //!    Преобразование всех элементов массива (строк) в ЧИСЛО и запись в новый массив convertArrToNumber:
    //!    СУММИРОВАНИЕ всех элементов массива:
    const convertNumberToSum22 = (num = 0,) => {
        console.log("num", num); //!
        let convertToNumberAndSum = Number(num);
        if (convertToNumberAndSum > 22) {
            const arrString = num.toString().split("");
            const convertArrToNumber = arrString.map(element => Number(element));
            convertToNumberAndSum = convertArrToNumber.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        }
        console.log("convertToNumberAndSum", convertToNumberAndSum); //!
        return convertToNumberAndSum;
    };
    //*__________________ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ Матрицы Судьбы __________________

    //! Personal Karma
    const personalNumber1 = convertNumberToSum22(dateOfBirthObj.day);
    const personalNumber2 = convertNumberToSum22(dateOfBirthObj.month);
    const personalNumber3 = convertNumberToSum22(dateOfBirthObj.year);
    const personalNumber4 = convertNumberToSum22(personalNumber1 + personalNumber2 + personalNumber3);

    console.log("personalNumber1", personalNumber1); //!
    console.log("personalNumber2", personalNumber2); //!
    console.log("personalNumber3", personalNumber3); //!
    console.log("personalNumber4", personalNumber4); //!

    //! Ancestral Karma
    const ancestralNumber1 = convertNumberToSum22(personalNumber1 + personalNumber2);
    const ancestralNumber2 = convertNumberToSum22(personalNumber2 + personalNumber3);
    const ancestralNumber3 = convertNumberToSum22(personalNumber3 + personalNumber4);
    const ancestralNumber4 = convertNumberToSum22(personalNumber4 + personalNumber1);

    console.log("ancestralNumber1", ancestralNumber1); //!
    console.log("ancestralNumber2", ancestralNumber2); //!
    console.log("ancestralNumber3", ancestralNumber3); //!
    console.log("ancestralNumber4", ancestralNumber4); //!

    //! Central Karma
    const centralPersonalNumber = convertNumberToSum22(personalNumber1 + personalNumber2 + personalNumber3 + personalNumber4);
    const centralAncestralNumber = convertNumberToSum22(ancestralNumber1 + ancestralNumber2 + ancestralNumber3 + ancestralNumber4);

    console.log("centralPersonalNumber", centralPersonalNumber); //!
    console.log("centralAncestralNumber", centralAncestralNumber); //!


    return (
        <div className={css.matrixContainer}>
            {/* <p style={{ color: "tomato", textAlign: "center" }}>{`<---- ${"PsychoMatrix"} ---->`}</p> */}
            {/* {showComponent1 && <p style={{ color: "tomato", textAlign: "center" }}>{`<---- ${"PsychoMatrix"} ---->`}</p>} */}
            {/* <p className={css.titleTextBase}>PsychoMatrix</p> */}
            {/* {showComponent2 && <p className={css.titleTextBase}>PsychoMatrix</p>} Компонент будет отображаться после задержки */}
            <form
                className={css.globalForm}
                onSubmit={handleSubmit}
            >
                <label
                    className={css.labelForm}
                >
                    День:
                    <input
                        className={css.inputForm}
                        type="number"
                        name="day"
                        placeholder="День"
                        required
                        min="0"
                        max="31"
                        // value={day}
                        onChange={handleChangeDay}
                    />
                </label>

                <label
                    className={css.labelForm}
                >
                    Месяц:
                    <input
                        className={css.inputForm}
                        type="number"
                        name="month"
                        placeholder="Месяц"
                        required
                        min="1"
                        max="12"
                        // value={month}
                        onChange={handleChangeMonth}
                    />
                </label>

                <label
                    className={css.labelForm}
                >
                    Год:
                    <input
                        className={css.inputForm}
                        type="number"
                        name="year"
                        placeholder="Год"
                        required
                        min="1000"
                        max="2024"
                        // value={year}
                        onChange={handleChangeYear}
                    />
                </label>

                <button
                    className={css.buttonSubmit}
                    type="submit"
                    disabled={!(day && month && year)}>
                    {/* Submit */}
                    {(day && month && year) ? 'Submit' : 'Inactive...'}
                </button>
            </form>
            {/* <div className={css.emptyContainer}> */}
            {/* {dateOfBirthObj && ( */}
            {/* <> */}
            {/* //! Дата Рождения */}
            <h1 className={css.sectionTitle}>Дата Рождения</h1>
            <div className={css.divColumn}>
                <div className={css.divLine}>
                    <div className={`${css.divCell} ${css.divCellSize}`}>Число</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>Месяц</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>Год</div>
                </div>
                <div className={css.divLine}>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{dateOfBirthObj.day ? dateOfBirthObj.day : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{dateOfBirthObj.month ? dateOfBirthObj.month : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{dateOfBirthObj.year ? dateOfBirthObj.year : '-'}</div>
                </div>
            </div>
            {/* //! Доп числа */}
            <h1 className={css.sectionTitle}>Дополнительные числа</h1>
            <div className={css.divColumn}>
                <div className={css.divLine}>
                    <div className={`${css.divCell} ${css.divCellSize}`}>I - Средства</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>II - Цель</div>
                    <div className={`${css.divCell} ${css.divCellSize} `}>III - Наследство</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>IV - Глав. качество</div>
                </div>
                <div className={css.divLine}>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{showComponent1 && firstAddNumber ? firstAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{showComponent2 && secondAddNumber ? secondAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize} ${css.divCellYellow}`}>{showComponent3 && thirdAddNumber ? thirdAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{showComponent4 && fourthAddNumber ? fourthAddNumber : '-'}</div>
                </div>
            </div>
            {/* //! ПсихоМатрица */}
            <h1 className={css.sectionTitle}>ПсихоМатрица</h1>
            <div className={css.divLine}>
                <div className={css.divColumn}>
                    <div className={`${css.divCell} ${css.divCellGray}`}>{'*'}</div>
                    <div className={`${css.divCell} ${css.divCellGray}`}>{'*'}</div>
                    {/* <div className={css.divCell}>{countObj[0] ? countObj[0] : '-'}</div> */}
                    <div
                        className={`${countObj[0] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent10 && countObj[0] ? countObj[0] : ['-', <span className={css.divCellNumber}>0</span>]}
                    </div>
                </div>
                <div className={css.divColumn}>
                    <div
                        className={`${countObj[1] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent11 && countObj[1] ? countObj[1] : ['-', <span className={css.divCellNumber}>1</span>]}
                    </div>
                    <div
                        className={`${countObj[2] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent12 && countObj[2] ? countObj[2] : ['-', <span className={css.divCellNumber}>2</span>]}
                    </div>
                    <div
                        className={`${countObj[3] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent13 && countObj[3] ? countObj[3] : ['-', <span className={css.divCellNumber}>3</span>]}
                    </div>
                </div>
                <div className={css.divColumn}>
                    <div
                        className={`${countObj[4] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent14 && countObj[4] ? countObj[4] : ['-', <span className={css.divCellNumber}>4</span>]}
                    </div>
                    <div
                        className={`${countObj[5] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent15 && countObj[5] ? countObj[5] : ['-', <span className={css.divCellNumber}>5</span>]}
                    </div>
                    <div
                        className={`${countObj[6] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent16 && countObj[6] ? countObj[6] : ['-', <span className={css.divCellNumber}>6</span>]}
                    </div>
                </div>
                <div className={css.divColumn}>
                    <div
                        className={`${countObj[7] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent17 && countObj[7] ? countObj[7] : ['-', <span className={css.divCellNumber}>7</span>]}
                    </div>
                    <div
                        className={`${countObj[8] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent18 && countObj[8] ? countObj[8] : ['-', <span className={css.divCellNumber}>8</span>]}
                    </div>
                    <div
                        className={`${countObj[9] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {showComponent19 && countObj[9] ? countObj[9] : ['-', <span className={css.divCellNumber}>9</span>]}
                    </div>
                </div>
            </div>

            {/* //! Матрица Судьбы */}
            <h1 className={css.sectionTitle}>Матрица Судьбы</h1>
            <div className={css.divMainFate}>
                {/* //! ДОПОЛНИТЕЛЬНЫЕ цифры Матрицы Судьбы (РОДОВАЯ Карма - Ancestral Karma)*/}
                <div className={css.divCubeFate}>
                    <div className={css.divCellCube}><div className={css.divCellCubeNumber1}>{ancestralNumber1 ? ancestralNumber1 : '-'}</div></div>
                    <div className={css.divCellCube}><div className={css.divCellCubeNumber2}>{ancestralNumber2 ? ancestralNumber2 : '-'}</div></div>
                    <div className={css.divCellCube}><div className={css.divCellCubeNumber3}>{ancestralNumber3 ? ancestralNumber3 : '-'}</div></div>
                    <div className={css.divCellCube}><div className={css.divCellCubeNumber4}>{ancestralNumber4 ? ancestralNumber4 : '-'}</div></div>
                </div>
                {/* //! ОСНОВНЫЕ цифры Матрицы Судьбы (ЛИЧНАЯ Карма - Personal Karma) */}
                <div className={`${css.divRhombusFate} ${css.rotated45}`}>
                    <div className={css.divCellRhombus}><div className={css.divCellRhombusNumber1}>{personalNumber1 ? personalNumber1 : '-'}</div></div>
                    <div className={css.divCellRhombus}><div className={css.divCellRhombusNumber2}>{personalNumber2 ? personalNumber2 : '-'}</div></div>
                    <div className={css.divCellRhombus}><div className={css.divCellRhombusNumber4}>{personalNumber4 ? personalNumber4 : '-'}</div></div>
                    <div className={css.divCellRhombus}><div className={css.divCellRhombusNumber3}>{personalNumber3 ? personalNumber3 : '-'}</div></div>
                </div>
                {/* //! ЦЕНТРАЛЬНЫЕ цифры Матрицы Судьбы */}
                <div className={css.divCellRhombusCenter}>{centralPersonalNumber ? centralPersonalNumber : '-'}</div>
                <div className={css.divCellCubeCenter}>{centralAncestralNumber ? centralAncestralNumber : '-'}</div>
                {/* //! Диагонали Матрицы Судьбы */}
                <div className={css.divCubeFateDiagonal1}></div>
                <div className={css.divCubeFateDiagonal2}></div>
                <div className={css.divRhombusFateDiagonal1}></div>
                <div className={css.divRhombusFateDiagonal2}></div>
            </div>
            {/* </> */}
            {/* )} */}
            {/* </div> */}
        </div>
    );
};
