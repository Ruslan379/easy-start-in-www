import { useSelector, useDispatch } from "react-redux";

import { statusFilters } from "../../../redux/TaskAsyncThunk2/asyncThunkConstants2";

import { getStatusFilter } from "../../../redux/TaskAsyncThunk2/asyncThunkSelectors2";
import { setStatusFilter2 } from "../../../redux/TaskAsyncThunk2/asyncThunkFiltersSlice2";

import { Button } from "components/TasksRepetaAsyncThunk2/Button/Button";

import css from "./StatusFilter.module.css";



export const StatusFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getStatusFilter);

    const handleFilterChange = filter => dispatch(setStatusFilter2(filter));

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
