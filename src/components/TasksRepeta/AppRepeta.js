import { Layout } from "components/TasksRepeta/Layout/Layout";
import { AppBar } from "components/TasksRepeta/AppBar/AppBar";
import { TaskForm } from "components/TasksRepeta/TaskForm/TaskForm";
import { TaskList } from "components/TasksRepeta/TaskList/TaskList";

export const AppRepeta = () => {
    return (
        <Layout>
            <AppBar />
            <TaskForm />
            <TaskList />
        </Layout>
    );
};
