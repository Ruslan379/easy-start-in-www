import {
    useState,
    // useEffect
} from 'react';

import css from './PsychoMatrix.module.css';

//-----------------------------------------------------
export const PsychoMatrix = () => {
    console.log('PsychoMatrix:');

    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    const [dateOfBirthObj, setDateOfBirthObj] = useState({});

    const [firstAddNumber, setFirstAddNumber] = useState(0);
    const [secondAddNumber, setSecondAddNumber] = useState(0);
    const [thirdAddNumber, setThirdAddNumber] = useState(0);
    const [fourthAddNumber, setFourthAddNumber] = useState(0);

    const [countObj, setCountObj] = useState({});


    //*------------------ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ------------------
    //! Преобразование числа в строку а затем в массив строк:
    const convertNumberToArray = (arr) => arr.toString().split("");

    //! Преобразование всех элементов массива (строк) в ЧИСЛО и СУММИРОВАНИЕ их:
    const convertToNumberAndSum = (arr) => arr.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);

    //! Преобразование всех элементов массива (строк) в ЧИСЛО и запись в новый массив:
    const convertToNumber = (arr) => arr.map(element => Number(element));
    //*__________________ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ __________________


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
        console.log("day:", Number(day)); //!
        const forThirdAddNumber = forFirstAddNumber - 2 * Number(day);
        // console.log("forThirdAddNumber:", forThirdAddNumber); //!
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
            <p style={{ color: "tomato", textAlign: "center" }}>{`<---- ${"PsychoMatrix"} ---->`}</p>
            <p className={css.titleTextBase}>PsychoMatrix</p>
            <form
                className={css.globalForm}
                onSubmit={handleSubmit}
            >
                <label
                    className={css.labelForm}
                >
                    Число:
                    <input
                        className={css.inputForm}
                        type="number"
                        name="day"
                        placeholder="День"
                        required
                        min="1"
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
                    <div className={`${css.divCell} ${css.divCellSize}`}>III - Наследство</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>IV - Глав. качество</div>
                </div>
                <div className={css.divLine}>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{firstAddNumber ? firstAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{secondAddNumber ? secondAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{thirdAddNumber ? thirdAddNumber : '-'}</div>
                    <div className={`${css.divCell} ${css.divCellSize}`}>{fourthAddNumber ? fourthAddNumber : '-'}</div>
                </div>
            </div>
            {/* //! Психо-матрица */}
            <h1 className={css.sectionTitle}>Психо-матрица</h1>
            <div className={css.divLine}>
                <div className={css.divColumn}>
                    <div className={css.divCell}>{countObj[1] ? countObj[1] : '-'}</div>
                    <div className={css.divCell}>{countObj[2] ? countObj[2] : '-'}</div>
                    <div className={css.divCell}>{countObj[3] ? countObj[3] : '-'}</div>
                </div>
                <div className={css.divColumn}>
                    <div className={css.divCell}>{countObj[4] ? countObj[4] : '-'}</div>
                    <div className={css.divCell}>{countObj[5] ? countObj[5] : '-'}</div>
                    <div className={css.divCell}>{countObj[6] ? countObj[6] : '-'}</div>
                </div>
                <div className={css.divColumn}>
                    <div className={css.divCell}>{countObj[7] ? countObj[7] : '-'}</div>
                    <div className={css.divCell}>{countObj[8] ? countObj[8] : '-'}</div>
                    <div className={css.divCell}>{countObj[9] ? countObj[9] : '-'}</div>
                </div>
            </div>

        </div>
    );
};
