import { useSelector } from "react-redux";

import { AppRepeta2} from "components/TasksRepetaAsyncThunk2/AppRepeta2";
import { statusFilters } from "../../redux/TaskAsyncThunk2/asyncThunkConstants2"; 
import { getAllState} from "../../redux/TaskAsyncThunk2/asyncThunkSelectors2";

// import css from './React714.module.css';


//-----------------------------------------------------


export const React7132 = () => {
    console.log("React_7-13(AsyncThunk):");

    console.log("React_7-13(AsyncThunk)-->statusFilters2:", statusFilters);

    //! Получаем необходимую часть состояния state
    // const stateTasks = useSelector(state => state.tasks); //todo OLD
    const stateAll = useSelector(getAllState);
    console.log("state All:", stateAll);


    return (
        <>
            <p style={{ color: "tomato", textAlign : "center" }}>{`<---- ${"React_7-13(AsyncThunk)"} ---->`}</p>
            <AppRepeta2 />
        </>
    )
}
