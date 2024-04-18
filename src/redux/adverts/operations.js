import { createAsyncThunk } from "@reduxjs/toolkit";
import * as advertsAPI from "../advertsAPI";

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async ({ page, limit, filterParams}, { rejectWithValue }) => {
    try {
      const adverts = await advertsAPI.fetchAdverts(page, limit, filterParams);
      return adverts;
    } catch (error) {
      return rejectWithValue(error.message);
    }  
  }
)

export const bookedVan = createAsyncThunk(
  "adverts/bookedVan",
  async (data) => {
    return data;
  }
)