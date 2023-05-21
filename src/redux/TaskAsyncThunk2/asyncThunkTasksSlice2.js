import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./asyncThunkOperations2";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const asyncThunkTasksSlice2 = createSlice({
    name: "tasks2",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        //! Получение всех задач
        [fetchTasks.pending]: handlePending,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchTasks.rejected]: handleRejected,
        //! Добавление задачи
        [addTask.pending]: handlePending,
        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addTask.rejected]: handleRejected,
        //! Удаление задачи
        [deleteTask.pending]: handlePending,
        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [deleteTask.rejected]: handleRejected,
        //! Переключение статуса
        [toggleCompleted.pending]: handlePending,
        [toggleCompleted.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1, action.payload);
        },
        [toggleCompleted.rejected]: handleRejected,
    },
});

export const asyncTasksReducer2 = asyncThunkTasksSlice2.reducer;
