//! Redux Toolkit - 2 (createSlice + Immer)
import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./asyncThunkConstants2";

const filtersInitialState = {
    status: statusFilters.all,
};

const filtersSlice2 = createSlice({
    name: "filters2",
    initialState: filtersInitialState,
    reducers: {
        //! Изменение фильтра
        setStatusFilter2(state, action) {
            state.status = action.payload;
        },
    },
});

//! Экспортируем генераторы экшенов и редюсер
export const { setStatusFilter2 } = filtersSlice2.actions;
export const filtersReducer2 = filtersSlice2.reducer;