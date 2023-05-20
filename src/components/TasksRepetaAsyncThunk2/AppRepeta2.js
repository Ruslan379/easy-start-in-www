import { Layout } from "components/TasksRepetaAsyncThunk2/Layout/Layout";
import { AppBar } from "components/TasksRepetaAsyncThunk2/AppBar/AppBar";
import { TaskForm } from "components/TasksRepetaAsyncThunk2/TaskForm/TaskForm";
import { TaskList } from "components/TasksRepetaAsyncThunk2/TaskList/TaskList";

export const AppRepeta2 = () => {
    return (
        <Layout>
            <AppBar />
            <TaskForm />
            <TaskList />
        </Layout>
    );
};
