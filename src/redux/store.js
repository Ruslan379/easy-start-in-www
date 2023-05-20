//! Redux Toolkit 
import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./Repeta/reducer"; //todo OLD-1
// import { tasksReducer, filtersReducer } from "./Repeta/reducer"; //todo OLD-2
import { tasksReducer } from "./Repeta/tasksSlice";
import { filtersReducer } from "./Repeta/filtersSlice";
import { asyncTasksReducer } from "./TaskAsyncThunk/asyncThunkTasksSlice";



//todo OLD-1
// export const store = configureStore({
//     reducer: rootReducer,
// });

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer,
        asyncThunkTasks: asyncTasksReducer
    },
});






//! Redux
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// // import { statusFilters } from "./Repeta/constants";
// import { rootReducer } from "./Repeta/reducer";

// // const initialState = {
// //     tasks: [
// //         { id: 0, text: "Learn HTML and CSS", completed: true },
// //         { id: 1, text: "Get good at JavaScript", completed: true },
// //         { id: 2, text: "Master React", completed: false },
// //         { id: 3, text: "Discover Redux", completed: false },
// //         { id: 4, text: "Build amazing apps", completed: false },
// //     ],
// //     filters: {
// //         // status: "all", //todo OLD
// //         status: statusFilters.all,
// //     },
// // };

// // const rootReducer = (state = initialState, action) => {
// //     return state;
// // };

// //! Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);