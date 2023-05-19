// ! Redux AsyncThunk - 3 (createSlice + Immer)
import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        //! Выполнится в момент старта HTTP-запроса
        fetchingInProgress(state) {
            state.isLoading = true;
        },
        //! Выполнится если HTTP-запрос завершился успешно
        fetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        //! Выполнится если HTTP-запрос завершился с ошибкой
        fetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});


//! Экспортируем генераторы экшенов и редюсер
export const { fetchingInProgress, fetchingSuccess, fetchingError } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;