import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
      advertsList: [],
      favorites: [],
      isLast: true,
      isLoading: false,
      error: null,
    }, 
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(advert => advert._id !== action.payload._id);
    }
  },
    extraReducers: builder => {
        builder 
            .addCase(fetchAdverts.pending, handlePending)
          .addCase(fetchAdverts.fulfilled, (state, action) => {
              // state.advertsList = action.payload;
              state.advertsList = [...state.advertsList, ...action.payload];
              state.isLast = action.payload.length < 4; 
              state.isLoading = false; 
              state.error = null;                                
            })
            .addCase(fetchAdverts.rejected, handleRejected)
            
      
    }
})

const persistConfig = {
    key: 'auth', 
    storage,
    whitelist: ['favorites'],
} 

export const advertsReducer = persistReducer(persistConfig, advertsSlice.reducer);
export const addToFavorites  = advertsSlice.actions.addToFavorites; 
export const removeFromFavorites = advertsSlice.actions.removeFromFavorites;