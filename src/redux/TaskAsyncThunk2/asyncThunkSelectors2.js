import { createSelector } from "@reduxjs/toolkit"; //? Мемоизация 

import { statusFilters } from "./asyncThunkConstants2"; //? NEW



//-----------------------------------------------------------
export const getAllState = state => state;

export const getAsyncThunkTasks2 = state => state.tasks2;



//todo OLD
export const getTasks = state => state.tasks2.items;
export const getIsLoading = state => state.tasks2.isLoading;
export const getError = state => state.tasks2.error;
export const getStatusFilter = state => state.filters2.status;

//* NEW
export const selectTasks = state => state.tasks2.items;
export const selectIsLoading = state => state.tasks2.isLoading;
export const selectError = state => state.tasks2.error;
export const selectStatusFilter = state => state.filters2.status;


//* Составные селекторы
//! Список задач:
export const selectVisibleTasks_OLD = state => {
    //! Используем другие селекторы
    const tasks = selectTasks(state);
    const statusFilter = selectStatusFilter(state);
    switch (statusFilter) {
        case statusFilters.active:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};


//! Счетчик задач:
export const selectTaskCount_OLD = state => {
    const tasks = selectTasks(state);

    console.log("selectTaskCount-->Calculating task count");

    return tasks.reduce(
        (count, task) => {
            if (task.completed) {
                count.completed += 1;
            } else {
                count.active += 1;
            }
            return count;
        },
        { active: 0, completed: 0 }
    );
};


//* Мемоизация - Оптимизация Составных селекторов с помощью createSelector
//! Список задач с помощью createSelector:
export const selectVisibleTasks = createSelector(
    [selectTasks, selectStatusFilter],
    (tasks, statusFilter) => {
        console.log("!!!!_Calculating visible tasks. Now memoized!");

        switch (statusFilter) {
            case statusFilters.active:
                return tasks.filter(task => !task.completed);
            case statusFilters.completed:
                return tasks.filter(task => task.completed);
            default:
                return tasks;
        }
    }
);


//! Счетчик задач с помощью createSelector:
export const selectTaskCount = createSelector([selectTasks], tasks => {
    console.log("!!!!_Calculating task count. Now memoized!");

    return tasks.reduce(
        (count, task) => {
            if (task.completed) {
                count.completed += 1;
            } else {
                count.active += 1;
            }
            return count;
        },
        { active: 0, completed: 0 }
    );
});
