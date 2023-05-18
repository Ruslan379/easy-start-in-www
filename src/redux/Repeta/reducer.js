//! Redux Toolkit 
import { statusFilters } from "./constants";



//? Tasks
const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
        //! Добавление задачи
        case "tasks/addTask":
            return [...state, action.payload];
        //! Удаление задачи
        case "tasks/deleteTask":
            return state.filter(task => task.id !== action.payload);
        //! Переключение статуса
        case "tasks/toggleCompleted":
            return state.map(task => {
                if (task.id !== action.payload) {
                    return task;
                }
                return { ...task, completed: !task.completed };
            });
        default:
            return state;
    };
};



//? Filters
const filtersInitialState = {
    status: statusFilters.all,
};

export const filtersReducer = (state = filtersInitialState, action) => {
    switch (action.type) {
        //! Изменение фильтра
        case "filters/setStatusFilter":
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};







//! Redux
// import { statusFilters } from "./constants";

// const initialState = {
//     tasks: [
//         { id: 0, text: "Learn HTML and CSS", completed: true },
//         { id: 1, text: "Get good at JavaScript", completed: true },
//         { id: 2, text: "Master React", completed: false },
//         { id: 3, text: "Discover Redux", completed: false },
//         { id: 4, text: "Build amazing apps", completed: false },
//     ],
//     filters: {
//         status: statusFilters.all,
//     },
// };

// export const rootReducer = (state = initialState, action) => {
//     //! Редюсер различает экшены по значению свойства type
//     switch (action.type) {
//         //! В зависимости от типа экшена будет выполняться разная логика
//         // case "tasks/addTask": {
//         //     //! Нужно вернуть новый объект состояния
//         //     return {
//         //         //! в котором есть все данные существующего состояния
//         //         ...state,
//         //         //! и новый массив задач
//         //         tasks: [
//         //             //! в котором есть все существующие задачи
//         //             ...state.tasks,
//         //             //! и объект новой задачи
//         //             action.payload,
//         //         ],
//         //     };
//         // };

//         //! Добавление задачи
//         case "tasks/addTask":
//             return {
//                 ...state,
//                 tasks: [...state.tasks, action.payload],
//             };
//         //! Удаление задачи
//         case "tasks/deleteTask":
//             return {
//                 ...state,
//                 tasks: state.tasks.filter(task => task.id !== action.payload),
//             };
//         //! Переключение статуса
//         case "tasks/toggleCompleted":
//             return {
//                 ...state,
//                 tasks: state.tasks.map(task => {
//                     if (task.id !== action.payload) {
//                         return task;
//                     }
//                     return {
//                         ...task,
//                         completed: !task.completed,
//                     };
//                 }),
//             };
//         //! Изменение фильтра
//         case "filters/setStatusFilter":
//             return {
//                 ...state,
//                 filters: {
//                     ...state.filters,
//                     status: action.payload,
//                 },
//             };
//         default:
//             //! Каждый редюсер получает все экшены отправленные в стор.
//             //! Если редюсер не должен обрабатывать какой-то тип экшена,
//             //! необходимо вернуть существующее состояние без изменений.
//             return state;
//     }
// };