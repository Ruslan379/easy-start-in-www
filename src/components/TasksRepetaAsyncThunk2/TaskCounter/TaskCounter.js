import { useSelector } from "react-redux";
import { getTasks, selectTaskCount } from "../../../redux/TaskAsyncThunk2/asyncThunkSelectors2";


import css from "./TaskCounter.module.css";

export const TaskCounter = () => {
    //! Получаем массив задач из состояния Redux
    // const tasks = useSelector(state => state.tasks); //todo OLD-OLD
    const tasks = useSelector(getTasks); //todo OLD
    console.log("TaskCounter-->tasks:", tasks); //todo OLD

    //todo OLD
    //! На базе состояния Redux получаем производные данные
    const count = tasks.reduce(
        (acc, task) => {
            if (task.completed) {
                acc.completed += 1;
            } else {
                acc.active += 1;
            }
            return acc;
        },
        { active: 0, completed: 0 }
    );

    console.log("count:", count); //todo OLD



    //* NEW - Получаем объект счетчика задач, используя Составные селекторы
    const count2 = useSelector(selectTaskCount);
    console.log("count2:", count2);

    const { active, completed } = useSelector(selectTaskCount);


    return (
        <div>
            {/* <p className={css.text}>Active: {count2.active}</p> */}
            <p className={css.text}>Active: {active}</p>
            {/* <p className={css.text}>Completed: {count2.completed}</p> */}
            <p className={css.text}>Completed: {completed}</p>
        </div>
    );
};
