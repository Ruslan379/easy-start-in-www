import { useSelector } from "react-redux";

import { AppRepeta } from "components/TasksRepeta/AppRepeta";
import { statusFilters } from "../../redux/Repeta/constants"; 
import {
    selectAllTasks,
    selectFiltersStatus,
} from "../../redux/Repeta/selectors";

// import css from './React713.module.css';


//-----------------------------------------------------


export const React713 = () => {
    console.log("React_7-13(14):");

    console.log("React_7-13(14)-->statusFilters:", statusFilters);

    //! Получаем необходимую часть состояния state
    // const stateTasks = useSelector(state => state.tasks); //todo OLD
    const stateTasks = useSelector(selectAllTasks);
    console.log("state.tasks:", stateTasks);

    // const stateFiltersStatus = useSelector(state => state.filters.status); //todo OLD
    const stateFiltersStatus = useSelector(selectFiltersStatus);
    console.log("state.filters.status:", stateFiltersStatus);


    return (
        <>
            <p style={{ color: "tomato", textAlign : "center" }}>{`<---- ${"React_7-13(14)"} ---->`}</p>
            <AppRepeta />
        </>
    )
}
