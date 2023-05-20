export const getAllState = state => state;

export const getAsyncThunkTasks2 = state => state.tasks2;




export const getTasks = state => state.tasks2.items;

export const getIsLoading = state => state.tasks2.isLoading;

export const getError = state => state.tasks2.error;

export const getStatusFilter = state => state.filters2.status;
