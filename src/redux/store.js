import { configureStore } from "@reduxjs/toolkit";
import { advertsSlice } from "./adverts/slice";

export const store = configureStore({
    reducer: {
        adverts: advertsSlice.reducer,
    }
})