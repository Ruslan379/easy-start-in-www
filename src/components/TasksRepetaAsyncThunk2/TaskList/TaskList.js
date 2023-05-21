import { useSelector } from "react-redux";

import { statusFilters } from "../../../redux/TaskAsyncThunk2/asyncThunkConstants2";

import {
    getTasks, //todo OLD
    getStatusFilter, //todo OLD
    selectVisibleTasks
} from "../../../redux/TaskAsyncThunk2/asyncThunkSelectors2";

import { Task } from "components/TasksRepetaAsyncThunk2/Task/Task";

import css from "./TaskList.module.css";


//todo OLD
//! Массив задач которые необходимо отображать в интерфейсе:
const getVisibleTasks = (tasks, statusFilter) => {
    switch (statusFilter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};


export const TaskList = () => {
    //! Получаем массив задач из состояния Redux
    // const tasks = useSelector(state => state.tasks); //todo OLD-OLD
    const tasks = useSelector(getTasks); //todo OLD
    console.log("tasks:", tasks); //todo OLD

    //! Получаем значение фильтра из состояния Redux
    // const statusFilter = useSelector(state => state.filters.status); //todo OLD-OLD
    const statusFilter = useSelector(getStatusFilter); //todo OLD
    console.log("statusFilter:", statusFilter); //todo OLD

    //! Вычисляем массив задач которые необходимо отображать в интерфейсе
    const visibleTasks = getVisibleTasks(tasks, statusFilter); //todo OLD
    console.log("visibleTasks:", visibleTasks); //todo OLD

    //* NEW - Вычисляем массив задач, используя Составные селекторы
    const visibleTasks2 = useSelector(selectVisibleTasks);

    return (
        <ul className={css.list}>
            {visibleTasks2.map(task => (
                <li
                    className={css.listItem}
                    key={task.id}
                >
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};
