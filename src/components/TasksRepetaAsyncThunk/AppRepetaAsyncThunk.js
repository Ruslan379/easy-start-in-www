import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTasks } from "redux/TaskAsyncThunk/asyncThunkOperations";
// import { getAsyncThunkTasks } from "redux/TaskAsyncThunk/asyncThunkSelectors"; //! НЕ будет перерендериваться
import { getAsyncThunkTasks2 } from "redux/TaskAsyncThunk2/asyncThunkSelectors2"; //* будет перерендериваться 

import { Layout } from "components/TasksRepeta/Layout/Layout";

export const AppRepetaAsyncThunk = () => {
    const dispatch = useDispatch();
    // const { items, isLoading, error } = useSelector(getAsyncThunkTasks); //! НЕ будет перерендериваться
    const { items, isLoading, error } = useSelector(getAsyncThunkTasks2); //* будет перерендериваться 
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
