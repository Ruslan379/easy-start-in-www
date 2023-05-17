//! Импортируем хук
import { useSelector } from "react-redux";

//! Импортируем объект значений фильтра
import { statusFilters } from "../../../redux/Repeta/constants";
import {
    // selectAllTasks,
    selectFiltersStatus,
} from "../../../redux/Repeta/selectors";
import { Button } from "components/TasksRepeta/Button/Button";

import css from "./StatusFilter.module.css";



export const StatusFilter = () => {
    //! Получаем значение фильтра из состояния Redux
    // const filter = useSelector(state => state.tasks); //todo OLD
    const filter = useSelector(selectFiltersStatus);


    return (
        <div className={css.wrapper}>
            <Button selected={filter === statusFilters.all}>All</Button>
            <Button selected={filter === statusFilters.active}>Active</Button>
            <Button selected={filter === statusFilters.completed}>Completed</Button>
        </div>

        // <div className={css.wrapper}>
        //     <Button>All</Button>
        //     <Button>Active</Button>
        //     <Button>Completed</Button>
        // </div>
    );
};
