import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "redux/TaskAsyncThunk2/asyncThunkOperations2";
import { getError, getIsLoading } from "redux/TaskAsyncThunk2/asyncThunkSelectors2";

import { Layout } from "components/TasksRepetaAsyncThunk2/Layout/Layout";
import { AppBar } from "components/TasksRepetaAsyncThunk2/AppBar/AppBar";
import { TaskForm } from "components/TasksRepetaAsyncThunk2/TaskForm/TaskForm";
import { TaskList } from "components/TasksRepetaAsyncThunk2/TaskList/TaskList";


export const AppRepeta2 = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <Layout>
            <AppBar />
            <TaskForm />
            {isLoading && !error && <b>Request in progress...</b>}
            <TaskList />
        </Layout>
    );
};
