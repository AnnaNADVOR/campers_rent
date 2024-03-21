import { createAsyncThunk } from "@reduxjs/toolkit";
import * as advertsAPI from "../advertsAPI";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async (_, { rejectWithValue }) => {
    try {
      const adverts = await advertsAPI.fetchAdverts();
      return adverts;
    } catch (error) {
      return rejectWithValue(error.message);
    }  
  }
)