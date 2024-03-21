import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
        advertsList: [],
        isLoading: false,
        error: null,
    }, 
    extraReducers: builder => {
        builder 
            .addCase(fetchAdverts.pending, handlePending)
            .addCase(fetchAdverts.fulfilled, (state, action) => {
                state.advertsList = action.payload;
                // state.advertsList.push(action.payload);                 
            })
        .addCase(fetchAdverts.rejected, handleRejected)
    }
})