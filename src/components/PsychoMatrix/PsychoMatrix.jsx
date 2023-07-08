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
        const allAsArrayNumber = allAsArray.map(element => Number(element));
        console.log("allAsArrayNumber:", allAsArrayNumber); //!

        //! firstAddNumber I:
        //! Посчитаем сумму в каждом из массивов:
        const sumAll = allAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
        console.log("sumAll:", sumAll); //!
        setFirstAddNumber(sumAll);

        //! secondAddNumber II:
        //! Преобразуем число firstAddNumber I в строку а затем в массив:
        const secondAddNumberAsArray = sumAll.toString().split("");
        console.log("secondAddNumberAsArray:", secondAddNumberAsArray); //!

        //! Суммируем цифры массива, если их больше 1
        if (secondAddNumberAsArray.length > 1) {
            setSecondAddNumber(secondAddNumberAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0))
        }

        //! thirdAddNumber III:
        console.log("day:", Number(day)); //!
        const forThirdAddNumber = sumAll - 2 * Number(day);
        console.log("forThirdAddNumber:", forThirdAddNumber); //!
        setThirdAddNumber(forThirdAddNumber);

        //! fourthAddNumber IV:
        //! Преобразуем forThirdAddNumber в строку а затем в массив:
        const forThirdAddNumberAsArray = forThirdAddNumber.toString().split("");
        console.log("forThirdAddNumberAsArray:", forThirdAddNumberAsArray); //!

        //! Суммируем цифры массива forThirdAddNumberAsArray, если их больше 1
        if (forThirdAddNumberAsArray.length > 1) {
            setFourthAddNumber(forThirdAddNumberAsArray.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0));
        } else {
            setFourthAddNumber(Number(forThirdAddNumberAsArray[0]))
        };


        setDay(0);
        setMonth(0);
        setYear(0);

        // console.log("dateOfBirth:", dateOfBirth);

        // evt.currentTarget.reset();
        form.reset();
    };

    console.log(`After SUBMIT--> День:${day}, Месяц:${month}, Год:${year}`); //!
    console.log("After SUBMIT--> dateOfBirth:", dateOfBirth); //!

    console.log("firstAddNumber I:", firstAddNumber); //!
    console.log("secondAddNumber II:", secondAddNumber); //!
    console.log("thirdAddNumber III:", thirdAddNumber); //!
    console.log("fourthAddNumber IV:", fourthAddNumber); //!





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
