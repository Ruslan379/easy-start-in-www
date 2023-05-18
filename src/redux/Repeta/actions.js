
import { nanoid } from "nanoid";


//* Генераторы экшенов
//! Добавление задачи
export const addTask = text => {
    console.log("tasks/addTask-->text:", text);
    return {
        type: "tasks/addTask",
        payload: {
            id: nanoid(),
            completed: false,
            text,
        },
    };
};

//! Удаление задачи
export const deleteTask = taskId => {
    console.log("tasks/deleteTask-->taskId:", taskId);
    return {
        type: "tasks/deleteTask",
        payload: taskId,
    };
};

//! Переключение статуса
export const toggleCompleted = taskId => {
    console.log("tasks/toggleCompleted-->taskId:", taskId);
    return {
        type: "tasks/toggleCompleted",
        payload: taskId,
    };
};

//! Изменение фильтра
export const setStatusFilter = value => {
    console.log("filters/setStatusFilter-->value:", value);
    return {
        type: "filters/setStatusFilter",
        payload: value,
    };
};


//todo ----- Экшены (actions) -----
// const action = {
//     type: "Action type", //! строка, которая описывает тип события в интерфейсе
//     payload: "Payload value", //!  данные - передают в необязательном свойстве
// };


//todo -------------------- OLD -----------------------
// const addTask = {
//     type: "tasks/addTask",
//     payload: {
//         id: "Generated id",
//         text: "User entered text",
//         completed: false,
//     },
// };

// const deleteTask = {
//     type: "tasks/deleteTask",
//     payload: "Task id",
// };

// const toggleCompleted = {
//     type: "tasks/toggleCompleted",
//     payload: "Task id",
// };

// const setStatusFilter = {
//     type: "filters/setStatusFilter",
//     payload: "Filter value",
// };
//todo ___________________ OLD ___________________