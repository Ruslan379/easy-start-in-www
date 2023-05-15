import { useSelector } from "react-redux";

import { AppRepeta } from "components/TasksRepeta/AppRepeta"; //*

// import css from './React611.module.css';


//-----------------------------------------------------
export const React611 = () => {
    console.log("React_6-11:");

    // Получаем необходимую часть состояния
    const stateTasks = useSelector(state => state.tasks);
    const stateFilters = useSelector(state => state.filters);
    console.log("state.tasks:", stateTasks);
    console.log("state.filters:", stateFilters);


    return (
        <>
            <p style={{ color: "tomato", textAlign : "center" }}>{`<---- ${"React_6-11"} ---->`}</p>
            <AppRepeta />
        </>
    )
}
