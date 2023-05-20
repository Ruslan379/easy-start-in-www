import { useSelector } from "react-redux";

import { AppRepeta2} from "components/TasksRepetaAsyncThunk2/AppRepeta2";
import { statusFilters } from "../../redux/Repeta/constants"; 
import { getAsyncThunkTasks} from "../../redux/TaskAsyncThunk/asyncThunkSelectors";

// import css from './React714.module.css';


//-----------------------------------------------------


export const React7132 = () => {
    console.log("React_7-13(2):");

    console.log("React_7-13(2)-->statusFilters:", statusFilters);

    //! Получаем необходимую часть состояния state
    // const stateTasks = useSelector(state => state.tasks); //todo OLD
    const stateAsyncThunkTasks = useSelector(getAsyncThunkTasks);
    console.log("state.asyncThunkTasks:", stateAsyncThunkTasks);


    return (
        <>
            <p style={{ color: "tomato", textAlign : "center" }}>{`<---- ${"React_7-13(2)"} ---->`}</p>
            <AppRepeta2 />
        </>
    )
}
