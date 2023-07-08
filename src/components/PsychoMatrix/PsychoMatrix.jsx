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
    const [dateOfBirth, setDateOfBirth] = useState({});

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

        //todo OLD
        // setDay(form.elements.day.value);
        // setMonth(form.elements.month.value);
        // setYear(form.elements.year.value);
        // setDateOfBirth({
        //     day: form.elements.day.value,
        //     month: form.elements.month.value,
        //     year: form.elements.year.value
        // });

        //! NEW --> setDateOfBirth- объект даты рождения
        setDateOfBirth({
            day,
            month,
            year
        });
        console.log(`SUBMIT--> День:${day}, Месяц:${month}, Год:${year}`); //!

        // //! Преобразуем все стейты в строки:
        // const dayAsString = day.toString();
        // const monthAsString = month.toString();
        // const yearAsString = year.toString();

        // //! Преобразуем все строки в массивы:
        // const dayAsArray = dayAsString.split("");
        // const monthAsArray = monthAsString.split("");
        // const yearAsArray = yearAsString.split("");

        //! Преобразуем все стейты в строки а затем в массивы:
        const dayAsArray = day.toString().split("");
        const monthAsArray = month.toString().split("");
        const yearAsArray = year.toString().split("");


        console.log("dayAsArray:", dayAsArray); //!
        console.log("monthAsArray:", monthAsArray); //!
        console.log("yearAsArray:", yearAsArray); //!


        //! "Сливаем" все массивы dayAsArray, monthAsArray, yearAsArray в один массив allAsArray:
        const allAsArray = [...dayAsArray, ...monthAsArray, ...yearAsArray]
        console.log("allAsArray:", allAsArray); //!
        //! Преобразовываем все элементы массива allAsArray в число и записываем в новый массив allAsArrayNumber:
        // const allAsArrayNumber = allAsArray.map(element => Number(element));
        // console.log("allAsArrayNumber:", allAsArrayNumber); //!


        //! ----------- firstAddNumber I-----------:
        //! Суммируем цифры массива allAsArray (дата рождения) и записываем в стейт setFirstAddNumber:
        const forFirstAddNumber = allAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
        console.log("forFirstAddNumber:", forFirstAddNumber); //!
        setFirstAddNumber(forFirstAddNumber);

        //! ----------- secondAddNumber II -----------:
        //! Преобразуем число forFirstAddNumber I в строку а затем в массив:
        const secondAddNumberAsArray = forFirstAddNumber.toString().split("");
        console.log("secondAddNumberAsArray:", secondAddNumberAsArray); //!

        //! Суммируем цифры массива secondAddNumberAsArray и записываем в стейт setSecondAddNumber
        const forSecondAddNumber = secondAddNumberAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
        setSecondAddNumber(forSecondAddNumber);


        //! ----------- thirdAddNumber III -----------:
        console.log("day:", Number(day)); //!
        const forThirdAddNumber = forFirstAddNumber - 2 * Number(day);
        console.log("forThirdAddNumber:", forThirdAddNumber); //!
        setThirdAddNumber(forThirdAddNumber);


        //! ----------- fourthAddNumber IV -----------:
        //! Преобразуем число forThirdAddNumber в строку а затем в массив:
        const forFourthAddNumberAsArray = forThirdAddNumber.toString().split("");
        console.log("forFourthAddNumberAsArray:", forFourthAddNumberAsArray); //!

        //! Суммируем цифры массива forThirdAddNumberAsArray и записываем в стейт setFourthAddNumber
        const forFourthAddNumber = forFourthAddNumberAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
        setFourthAddNumber(forFourthAddNumber);

        //! Преобразуем все стейты ****AddNumber в строки а затем в массивы:
        const firstAddNumberArray = forFirstAddNumber.toString().split("");
        const secondAddNumberArray = forSecondAddNumber.toString().split("");
        const thirdAddNumberArray = forThirdAddNumber.toString().split("");
        const fourthAddNumberArray = forFourthAddNumber.toString().split("");

        console.log("firstAddNumberArray I:", firstAddNumberArray); //!
        console.log("secondAddNumberArray II:", secondAddNumberArray); //!
        console.log("thirdAddNumberArray III:", thirdAddNumberArray); //!
        console.log("fourthAddNumberArray IV:", fourthAddNumberArray); //!

        //! "Сливаем" все массивы стейтов ****AddNumberAsArray и Дня рождения (allAsArray) в один массив allAddNumberAsArray:
        const allArray = [
            ...allAsArray,
            ...firstAddNumberArray,
            ...secondAddNumberArray,
            ...thirdAddNumberArray,
            ...fourthAddNumberArray
        ]
        console.log("allArray:", allArray); //!

        //! Преобразовываем все элементы массива allAddNumberAsArray в число и записываем в новый массив allAddNumberAsArrayNumber:
        const allNumberAsArrayNumber = allArray.map(element => Number(element));
        console.log("allNumberAsArrayNumber:", allNumberAsArrayNumber); //!

        //! Подсчитываем количество цифр в массиве allAsArrayNumber и записывем эти данные в объект countObj:
        const count = {};

        for (let i = 0; i < allNumberAsArrayNumber.length; i++) {
            const num = allNumberAsArrayNumber[i];
            count[num] = count[num] ? count[num] + 1 : 1;
        };
        setCountObj(count);
        console.log("count:", count); //!




        setDay(0);
        setMonth(0);
        setYear(0);

        // console.log("dateOfBirth:", dateOfBirth);
        // evt.currentTarget.reset();
        form.reset();
    };


    //* ---------------------------------------------------------------------------------

    console.log(`After SUBMIT--> День:${day}, Месяц:${month}, Год:${year}`); //!
    console.log("After SUBMIT--> dateOfBirth:", dateOfBirth); //!

    console.log("firstAddNumber I:", firstAddNumber); //!
    console.log("secondAddNumber II:", secondAddNumber); //!
    console.log("thirdAddNumber III:", thirdAddNumber); //!
    console.log("fourthAddNumber IV:", fourthAddNumber); //!

    console.log("FINAL--> countObj:", countObj); //!




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
                        // type="text"
                        // minLength="2"
                        // maxLength="4"
                        type="number"
                        // name="module"
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
