

// import css from './JS_917.module.css';


//-----------------------------------------------------
export const JS_917 = () => {
    console.log("JS_9-17:");

    //! Дата и время
    console.log("Дата и время:");

    const date = new Date();

    console.log("date:", date);
    console.log("date.toString():", date.toString());

    //! Unix время
    console.log("Unix время:");

    console.log("new Date(0):", new Date(0));
    console.log("new Date(15000):", new Date(15000));

    // const date = new Date();
    console.log(date.getTime()); // 1624021654154
    console.log("date.getTime():", date.getTime());

    //! Методы (Геттеры)
    console.log("Методы (Геттеры):");

    // const date = new Date();
    console.log("Date: ", date);

    // Возвращает день месяца от 1 до 31
    console.log("getDate(): ", date.getDate());

    // Возвращает день недели от 0 до 6
    console.log("getDay(): ", date.getDay());

    // Возвращает месяц от 0 до 11
    console.log("getMonth(): ", date.getMonth());

    // Возвращает год из 4 цифр
    console.log("getFullYear(): ", date.getFullYear());

    // Возвращает час
    console.log("getHours(): ", date.getHours());

    // Возвращает минуты
    console.log("getMinutes(): ", date.getMinutes());

    // Возвращает секунды
    console.log("getSeconds(): ", date.getSeconds());

    // Возвращает миллисекунды
    console.log("getMilliseconds(): ", date.getMilliseconds());


    return (
        <>
            <p style={{ color: "tomato", textAlign : "center"}}>{`<---- ${"JS_9-17"} ---->`}</p>
            {/* Дата и время */}
            <p style={{ color: "green" }}>{`date: ${date}`}</p>
            <p style={{ color: "blue" }}>{`date.toString(): ${date.toString()}`}</p>
            <p style={{ color: "red" }}>{`date.getTime(): ${date.getTime()}`}</p>
            <br />
            <p style={{ color: "orange" }}>{`date.toTimeString(): ${date.toTimeString()}`}</p>
            <p style={{ color: "orange" }}>{`date.toLocaleTimeString(): ${date.toLocaleTimeString()}`}</p>
            <p style={{ color: "orange" }}>{`date.toUTCString(): ${date.toUTCString()}`}</p>
            <p style={{ color: "orange" }}>{`date.toDateString(): ${date.toDateString()}`}</p>
            <p style={{ color: "orange" }}>{`date.toISOString: ${date.toISOString}`}</p>
            <p style={{ color: "orange" }}>{`date.toLocaleString(): ${date.toLocaleString()}`}</p>
        </>
    )
}
