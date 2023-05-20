import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "redux/TaskAsyncThunk/asyncThunkOperations";
import { getAsyncThunkTasks } from "redux/TaskAsyncThunk/asyncThunkSelectors";

import { Layout } from "components/TasksRepeta/Layout/Layout";

export const AppRepetaAsyncThunk = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(getAsyncThunkTasks);


    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <Layout>
            <div>
                {isLoading && <b>Loading tasks...</b>}
                {error && <b>{error}</b>}
                <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
            </div>
        </Layout>
    );
};
