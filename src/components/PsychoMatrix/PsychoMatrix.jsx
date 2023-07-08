import {
    useState,
    // useEffect
} from 'react';

import css from './PsychoMatrix.module.css';

//-----------------------------------------------------
export const PsychoMatrix = () => {
    console.log('PsychoMatrix:');
    // console.log("book:", book);

    // const [trigger, setTrigger] = useState(false);

    // const toggleTrigger = () => {
    //     setTrigger(!trigger);
    // }


    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState({});


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
        console.log('Вызывается при отправке формы');

        //todo OLD
        // setDay(form.elements.day.value);
        // setMonth(form.elements.month.value);
        // setYear(form.elements.year.value);
        // setDateOfBirth({
        //     day: form.elements.day.value,
        //     month: form.elements.month.value,
        //     year: form.elements.year.value
        // });

        //! NEW
        setDateOfBirth({
            day,
            month,
            year
        });
        setDay(0);
        setMonth(0);
        setYear(0);

        // console.log(`SUBMIT --> День:${day}, Месяц:${month}, Год:${year}`);
        // console.log("dateOfBirth:", dateOfBirth);
        form.reset();
        // evt.currentTarget.reset();
    };

    console.log(`SUBMIT --> День:${day}, Месяц:${month}, Год:${year}`);
    console.log("dateOfBirth:", dateOfBirth);



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
                        // value={module}
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
                        // name="classes"
                        name="month"
                        placeholder="Месяц"
                        required
                        min="1"
                        max="12"
                        // value={classes}
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
                        // value={classes}
                        onChange={handleChangeYear}
                    />
                </label>

                <button
                    className={css.buttonSubmit}
                    type="submit"
                    disabled={!(day && month && year)}>
                    {/* Module JS */}
                    {day ? 'Submit' : 'Inactive...'}
                </button>
            </form>
            {/* <Outlet /> */}
        </>
    );
};
