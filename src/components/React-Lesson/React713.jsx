import { useSelector } from "react-redux";

import { AppRepetaAsyncThunk } from "components/TasksRepetaAsyncThunk/AppRepetaAsyncThunk";
import { statusFilters } from "../../redux/Repeta/constants"; 
import { getAsyncThunkTasks} from "../../redux/TaskAsyncThunk/asyncThunkSelectors";

// import css from './React714.module.css';


//-----------------------------------------------------


export const React713 = () => {
    console.log("React_7-13:");

    console.log("React_7-13-->statusFilters:", statusFilters);

    //! Получаем необходимую часть состояния state
    // const stateTasks = useSelector(state => state.tasks); //todo OLD
    const stateAsyncThunkTasks = useSelector(getAsyncThunkTasks);
    console.log("state.asyncThunkTasks:", stateAsyncThunkTasks);


    return (
        <>
            <p style={{ color: "tomato", textAlign : "center" }}>{`<---- ${"React_7-13"} ---->`}</p>
            <AppRepetaAsyncThunk />
        </>
    )
}
