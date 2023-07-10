import {
    useState,
    useEffect
} from 'react';

// import ringtone1 from 'sound/55031879babb424.mp3';
// import ringtone2 from 'sound/car-alarm-deluxe-2.mp3';
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
        const timer1 = setTimeout(() => {
            setShowComponent1(true);
            if (firstAddNumber) playSound();
        }, 250); //! Задержка в миллисекундах (1 секунда в данном примере)

        const timer2 = setTimeout(() => {
            setShowComponent2(true);
            if (firstAddNumber) playSound();
        }, 500); //! Задержка в миллисекундах (2 секунды в данном примере)

        const timer3 = setTimeout(() => {
            setShowComponent3(true);
            if (firstAddNumber) playSound();
        }, 750); //! Задержка в миллисекундах (3 секунды в данном примере)

        const timer4 = setTimeout(() => {
            setShowComponent4(true);
            if (firstAddNumber) playSound();
        }, 1000); //! Задержка в миллисекундах (4 секунды в данном примере)

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            setShowComponent1(false);
            setShowComponent2(false);
            setShowComponent3(false);
            setShowComponent4(false);
        }; //! Очистка таймеров при размонтировании компонента
    }, [trigger, firstAddNumber]);

    const playSound = () => {
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
                    {/* <div className={`${css.divCell} ${css.divCellSize}`}>{showComponent1 && firstAddNumber}</div> */}
                    {/* <div className={`${css.divCell} ${css.divCellSize}`}>{showComponent2 && secondAddNumber}</div> */}
                    {/* <div className={`${css.divCell} ${css.divCellSize} ${css.divCellYellow}`}>{showComponent3 && thirdAddNumber}</div> */}
                    {/* <div className={`${css.divCell} ${css.divCellSize}`}>{showComponent4 && fourthAddNumber}</div> */}

                    {/* <div className={`${css.divCell} ${css.divCellSize}`}>{firstAddNumber ? firstAddNumber : '-'}</div> */}
                    {/* <div className={`${css.divCell} ${css.divCellSize}`}>{secondAddNumber ? secondAddNumber : '-'}</div> */}
                    {/* <div className={`${css.divCell} ${css.divCellSize} ${css.divCellYellow}`}>{thirdAddNumber ? thirdAddNumber : '-'}</div> */}
                    {/* <div className={`${css.divCell} ${css.divCellSize}`}>{fourthAddNumber ? fourthAddNumber : '-'}</div> */}

                    <div className={`${css.divCell} ${css.divCellSize}`}>{(showComponent1 && firstAddNumber) ? firstAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{(showComponent2 && secondAddNumber) ? secondAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize} ${css.divCellYellow}`}>{(showComponent3 && thirdAddNumber) ? thirdAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{(showComponent4 && fourthAddNumber) ? fourthAddNumber : '-'}</div>
                </div>
            </div>
            {/* //! Психо-матрица */}
            <h1 className={css.sectionTitle}>ПсихоМатрица</h1>
            <div className={css.divLine}>
                <div className={css.divColumn}>
                    <div className={`${css.divCell} ${css.divCellGray}`}>{'*'}</div>
                    <div className={`${css.divCell} ${css.divCellGray}`}>{'*'}</div>
                    {/* <div className={css.divCell}>{countObj[0] ? countObj[0] : '-'}</div> */}
                    <div
                        className={`${countObj[0] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[0] ? countObj[0] : ['-', <span className={css.divCellNumberNull}>0</span>]}
                    </div>
                </div>
                <div className={css.divColumn}>
                    <div
                        className={`${countObj[1] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[1] ? countObj[1] : ['-', <span className={css.divCellNumberNull}>1</span>]}
                    </div>
                    <div
                        className={`${countObj[2] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[2] ? countObj[2] : ['-', <span className={css.divCellNumberNull}>2</span>]}
                    </div>
                    <div
                        className={`${countObj[3] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[3] ? countObj[3] : ['-', <span className={css.divCellNumberNull}>3</span>]}
                    </div>
                </div>
                <div className={css.divColumn}>
                    <div
                        className={`${countObj[4] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[4] ? countObj[4] : ['-', <span className={css.divCellNumberNull}>4</span>]}
                    </div>
                    <div
                        className={`${countObj[5] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[5] ? countObj[5] : ['-', <span className={css.divCellNumberNull}>5</span>]}
                    </div>
                    <div
                        className={`${countObj[6] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[6] ? countObj[6] : ['-', <span className={css.divCellNumberNull}>6</span>]}
                    </div>
                </div>
                <div className={css.divColumn}>
                    <div
                        className={`${countObj[7] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[7] ? countObj[7] : ['-', <span className={css.divCellNumberNull}>7</span>]}
                    </div>
                    <div
                        className={`${countObj[8] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[8] ? countObj[8] : ['-', <span className={css.divCellNumberNull}>8</span>]}
                    </div>
                    <div
                        className={`${countObj[9] ? `${css.divCell}` : `${css.divCell} ${css.divCellNull}`}`}
                    >
                        {countObj[9] ? countObj[9] : ['-', <span className={css.divCellNumberNull}>9</span>]}
                    </div>
                </div>
            </div>
            {/* </> */}
            {/* )} */}
            {/* </div> */}
        </div>
    );
};
