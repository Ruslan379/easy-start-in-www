import { statusFilters } from "./asyncThunkConstants2"; //* NEW

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
export const selectVisibleTasks = state => {
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