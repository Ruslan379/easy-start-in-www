import { createSlice } from "@reduxjs/toolkit";
//! Импортируем операцию
import { fetchAllTasks } from "./asyncThunkOperations";


const tasksInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

// ! Redux AsyncThunk - 4 (extraReducers)
const asyncThunkTasksSlice = createSlice({
    name: "asyncThunkTasks",
    initialState: tasksInitialState,
    // initialState: {
    //     items: [],
    //     isLoading: false,
    //     error: null,
    // },
    extraReducers: {
        [fetchAllTasks.pending](state) {
            state.isLoading = true;
        },
        [fetchAllTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchAllTasks.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const asyncTasksReducer = asyncThunkTasksSlice.reducer;




//todo OLD
// ! Redux AsyncThunk - 3 (createSlice + Immer)
// const asyncThunkTasksSlice = createSlice({
//     name: "asyncThunkTasks",
//     // initialState: {
//     //     items: [],
//     //     isLoading: false,
//     //     error: null,
//     // },
//     initialState: tasksInitialState,
//     reducers: {
//         //! Выполнится в момент старта HTTP-запроса
//         fetchingInProgress(state) {
//             state.isLoading = true;
//         },
//         //! Выполнится если HTTP-запрос завершился успешно
//         fetchingSuccess(state, action) {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload;
//         },
//         //! Выполнится если HTTP-запрос завершился с ошибкой
//         fetchingError(state, action) {
//             state.isLoading = false;
//             state.error = action.payload;
//         },
//     },
// });


// //! Экспортируем генераторы экшенов и редюсер
// export const {
//     fetchingInProgress,
//     fetchingSuccess,
//     fetchingError
// } = asyncThunkTasksSlice.actions;

// export const asyncTasksReducer = asyncThunkTasksSlice.reducer;