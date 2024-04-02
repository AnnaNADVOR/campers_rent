import { createAsyncThunk } from "@reduxjs/toolkit";
import * as advertsAPI from "../advertsAPI";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async ({page, limit}, { rejectWithValue }) => {
    try {
      const adverts = await advertsAPI.fetchAdverts(page, limit);
      return adverts;
    } catch (error) {
      return rejectWithValue(error.message);
    }  
  }
)