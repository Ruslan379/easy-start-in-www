//! Импортируем хук
import { useSelector, useDispatch } from "react-redux";
//! Импортируем генератор экшена
import { setStatusFilter } from "../../../redux/Repeta/actions";
//! Импортируем объект значений фильтра
import { statusFilters } from "../../../redux/Repeta/constants";
import {
    // selectAllTasks,
    selectFiltersStatus,
} from "../../../redux/Repeta/selectors";
import { Button } from "components/TasksRepeta/Button/Button";

import css from "./StatusFilter.module.css";



export const StatusFilter = () => {
    //! Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    //! Получаем значение фильтра из состояния Redux
    // const filter = useSelector(state => state.tasks); //todo OLD
    const filter = useSelector(selectFiltersStatus);

    //! Вызываем генератор экшена и передаём значение фильтра
    //! Отправляем результат - экшен изменения фильтра
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));


    return (
        <div className={css.wrapper}>
            <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >
                All
            </Button>
            <Button
                selected={filter === statusFilters.active}
                onClick={() => handleFilterChange(statusFilters.active)}
            >
                Active
            </Button>
            <Button
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >
                Completed
            </Button>
        </div>
    );
};
