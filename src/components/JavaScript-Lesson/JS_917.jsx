

// import css from './JS_917.module.css';


//-----------------------------------------------------
export const JS_917 = () => {
    console.log("JS_9-17:");

    //! Дата и время
    console.log("Дата и время:");
    const date = new Date();

    console.log("date:", date);
    console.log("date.toString():", date.toString());


    return (
        <>
            <p style={{ color: "tomato", textAlign : "center"}}>{`<---- ${"JS_9-17"} ---->`}</p>
            {/* Дата и время */}
            <p style={{ color: "green" }}>{`date: ${date}`}</p>
            <p style={{ color: "blue" }}>{`date.toString(): ${date.toString()}`}</p>
            
        </>
    )
}
