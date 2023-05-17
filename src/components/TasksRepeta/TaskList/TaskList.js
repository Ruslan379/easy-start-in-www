import { useSelector } from "react-redux";
//! Импортируем объект значений фильтра
import { statusFilters } from "../../../redux/Repeta/constants";
import {
    selectAllTasks,
    selectFiltersStatus,
} from "../../../redux/Repeta/selectors";

import { Task } from "components/TasksRepeta/Task/Task";

import css from "./TaskList.module.css";



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
    // const tasks = useSelector(state => state.tasks); //todo OLD
    const tasks = useSelector(selectAllTasks);

    //! Получаем значение фильтра из состояния Redux
    // const statusFilter = useSelector(state => state.filters.status); //todo OLD
    const statusFilter = useSelector(selectFiltersStatus);
    console.log("statusFilter:", statusFilter);

    //! Вычисляем массив задач которые необходимо отображать в интерфейсе
    const visibleTasks = getVisibleTasks(tasks, statusFilter);


    return (
        <ul className={css.list}>
            {visibleTasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};
