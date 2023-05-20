import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
} from "./asyncThunkTasksSlice.js";


axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

//todo OLD
// const fetchTasks = () => async dispatch => {
//     try {
//         const response = await axios.get("/tasks");
//     } catch (e) { }
// };


export const fetchTasks = () => async dispatch => {
    try {
        //! Индикатор загрузки
        dispatch(fetchingInProgress());
        //! HTTP-запрос
        const response = await axios.get("/tasks");
        setTimeout(() => {
            //! Обработка данных
            dispatch(fetchingSuccess(response.data));
        }, 3000);

    } catch (e) {
        //! Обработка ошибки
        dispatch(fetchingError(e.message));
    }
};