import {
    useState,
    // useEffect
} from 'react';

import css from './PsychoMatrix.module.css';

//-----------------------------------------------------
export const PsychoMatrix = () => {
    console.log('PsychoMatrix:');

    // const [trigger, setTrigger] = useState(false);

    // const toggleTrigger = () => {
    //     setTrigger(!trigger);
    // }


    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);

    const [dateOfBirthObj, setDateOfBirthObj] = useState({});

    const [firstAddNumber, setFirstAddNumber] = useState(0);
    const [secondAddNumber, setSecondAddNumber] = useState(0);
    const [thirdAddNumber, setThirdAddNumber] = useState(0);
    const [fourthAddNumber, setFourthAddNumber] = useState(0);

    const [countObj, setCountObj] = useState({});

    // const [quantity1, setQuantity1] = useState(0);
    // const [quantity2, setQuantity2] = useState(0);
    // const [quantity3, setQuantity3] = useState(0);
    // const [quantity4, setQuantity4] = useState(0);
    // const [quantity5, setQuantity5] = useState(0);
    // const [quantity6, setQuantity6] = useState(0);
    // const [quantity7, setQuantity7] = useState(0);
    // const [quantity8, setQuantity8] = useState(0);
    // const [quantity9, setQuantity9] = useState(0);
    // const [quantity0, setQuantity0] = useState(0);


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

        //todo OLD
        // setDay(form.elements.day.value);
        // setMonth(form.elements.month.value);
        // setYear(form.elements.year.value);
        // setdateOfBirthObj({
        //     day: form.elements.day.value,
        //     month: form.elements.month.value,
        //     year: form.elements.year.value
        // });

        //! Создаем объект даты рождения --> dateOfBirthObj
        setDateOfBirthObj({
            day,
            month,
            year
        });


        //todo OLD
        // //! Преобразуем все стейты в строки:
        // const dayAsString = day.toString();
        // const monthAsString = month.toString();
        // const yearAsString = year.toString();

        //todo OLD
        // //! Преобразуем все строки в массивы:
        // const dayAsArray = dayAsString.split("");
        // const monthAsArray = monthAsString.split("");
        // const yearAsArray = yearAsString.split("");

        //todo OLD
        //! Преобразуем все стейты в строки а затем в массивы строк:
        // const dayAsArray = day.toString().split(""); 
        // const monthAsArray = month.toString().split(""); 
        // const yearAsArray = year.toString().split(""); 

        //! Преобразуем все стейты в строки а затем в массивы строк:
        const dayAsArray = convertNumberToArray(day);
        const monthAsArray = convertNumberToArray(month);
        const yearAsArray = convertNumberToArray(year);

        // console.log("dayAsArray:", dayAsArray); //!
        // console.log("monthAsArray:", monthAsArray); //!
        // console.log("yearAsArray:", yearAsArray); //!


        //! "Сливаем" все массивы: dayAsArray, monthAsArray, yearAsArray в один массив dateOfBirthAsArray:
        const dateOfBirthAsArray = [
            ...dayAsArray,
            ...monthAsArray,
            ...yearAsArray
        ];
        // console.log("dateOfBirthAsArray:", dateOfBirthAsArray); //!

        //todo ПОКА НЕ НАДО:
        //! Преобразовываем все элементы массива dateOfBirthAsArray (строки) в число и записываем в новый массив dateOfBirthAsArrayNumber:
        // const dateOfBirthAsArrayNumber = dateOfBirthAsArray.map(element => Number(element)); //todo OLD
        // const dateOfBirthAsArrayNumber = convertToNumber(dateOfBirthAsArray);
        // console.log("dateOfBirthAsArrayNumber:", dateOfBirthAsArrayNumber); //!


        //! ----------- firstAddNumber I-----------:
        //! Суммируем ВСЕ цифры массива dateOfBirthAsArray (дата рождения) и записываем в стейт firstAddNumber:
        // const forFirstAddNumber = dateOfBirthAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0); //todo OLD
        const forFirstAddNumber = convertToNumberAndSum(dateOfBirthAsArray);
        console.log("forFirstAddNumber:", forFirstAddNumber); //!
        setFirstAddNumber(forFirstAddNumber);

        //! ----------- secondAddNumber II -----------:
        //! Преобразуем число forFirstAddNumber в строку а затем в массив:
        // const secondAddNumberAsArray = forFirstAddNumber.toString().split(""); //todo OLD
        const secondAddNumberAsArray = convertNumberToArray(forFirstAddNumber);
        console.log("secondAddNumberAsArray:", secondAddNumberAsArray); //!

        //! Суммируем цифры массива secondAddNumberAsArray и записываем в стейт secondAddNumber
        // const forSecondAddNumber = secondAddNumberAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0); //todo OLD
        const forSecondAddNumber = convertToNumberAndSum(secondAddNumberAsArray);
        console.log("forSecondAddNumber:", forSecondAddNumber); //!
        setSecondAddNumber(forSecondAddNumber);


        //! ----------- thirdAddNumber III -----------:
        console.log("day:", Number(day)); //!
        const forThirdAddNumber = forFirstAddNumber - 2 * Number(day);
        console.log("forThirdAddNumber:", forThirdAddNumber); //!
        setThirdAddNumber(forThirdAddNumber);


        //! ----------- fourthAddNumber IV -----------:
        //! Преобразуем число forThirdAddNumber в строку а затем в массив:
        // const fourthAddNumberAsArray = forThirdAddNumber.toString().split(""); //todo OLD
        const fourthAddNumberAsArray = convertNumberToArray(forThirdAddNumber);
        console.log("fourthAddNumberAsArray:", fourthAddNumberAsArray); //!

        //! Суммируем цифры массива forThirdAddNumberAsArray и записываем в стейт setFourthAddNumber
        // const forFourthAddNumber = fourthAddNumberAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0); //todo OLD
        const forFourthAddNumber = convertToNumberAndSum(fourthAddNumberAsArray);
        console.log("forFourthAddNumber:", forFourthAddNumber); //!
        setFourthAddNumber(forFourthAddNumber);

        //! ----------- Преобразуем все  for****AddNumber (стейты) в строки а затем в массивы -----------:
        //todo OLD
        // const firstAddNumberArray = forFirstAddNumber.toString().split("");
        // const secondAddNumberArray = forSecondAddNumber.toString().split("");
        // const thirdAddNumberArray = forThirdAddNumber.toString().split("");
        // const fourthAddNumberArray = forFourthAddNumber.toString().split("");

        const firstAddNumberArray = convertNumberToArray(forFirstAddNumber);
        const secondAddNumberArray = convertNumberToArray(forSecondAddNumber);
        const thirdAddNumberArray = convertNumberToArray(forThirdAddNumber);
        const fourthAddNumberArray = convertNumberToArray(forFourthAddNumber);

        console.log("firstAddNumberArray I:", firstAddNumberArray); //!
        console.log("secondAddNumberArray II:", secondAddNumberArray); //!
        console.log("thirdAddNumberArray III:", thirdAddNumberArray); //!
        console.log("fourthAddNumberArray IV:", fourthAddNumberArray); //!

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
        // const allAsArrayNumber = allAsArray.map(element => Number(element)); //todo OLD
        const allAsArrayNumber = convertToNumber(allAsArray);
        console.log("allAsArrayNumber:", allAsArrayNumber); //!

        //! Подсчитываем количество цифр в массиве dateOfBirthAsArrayNumber и записывем эти данные в объект countObj:
        const count = {};

        for (let i = 0; i < allAsArrayNumber.length; i++) {
            const num = allAsArrayNumber[i];
            count[num] = count[num] ? count[num] + 1 : 1;
        };
        console.log("count:", count); //!
        setCountObj(count);


        setDay(0);
        setMonth(0);
        setYear(0);

        // console.log("dateOfBirthObj:", dateOfBirthObj);
        // evt.currentTarget.reset();
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
        <>
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
            {/* <Outlet /> */}
        </>
    );
};
