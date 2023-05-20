import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTasks } from "redux/TaskAsyncThunk/asyncThunkOperations";
import { getAsyncThunkTasks } from "redux/TaskAsyncThunk/asyncThunkSelectors";

import { Layout } from "components/TasksRepeta/Layout/Layout";

export const AppRepetaAsyncThunk2 = () => {
    const dispatch = useDispatch();
    const { items, isLoading, error } = useSelector(getAsyncThunkTasks);
    console.log("items:", items);


    useEffect(() => {
        dispatch(fetchAllTasks());
    }, [dispatch]);

    return (
        <Layout>
            <div>
                {isLoading && <b>Loading tasks...</b>}
                {error && <b>{error}</b>}
                {!isLoading && <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>}

            </div>
        </Layout>
    );
};
