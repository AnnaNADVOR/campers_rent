import { createSlice } from "@reduxjs/toolkit";
import { bookedVan, fetchAdverts } from "./operations";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// const handlePending = state => {
//   state.isLoading = true;
// };

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
    name: "adverts",
    initialState: {
      advertsList: [],
      favorites: [],
      booked: [],
      isLast: true,
      isLoadingAdverts: false,
      error: null,
    }, 
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(advert => advert._id !== action.payload._id);
    },
    // addToBooked: (state, action) => {
    //   state.booked.push(action.payload);
    // }
  },
    extraReducers: builder => {
        builder 
          .addCase(fetchAdverts.pending, state => {
            state.isLoadingAdverts = true;
          })
          .addCase(fetchAdverts.fulfilled, (state, action) => {
              state.advertsList = [...state.advertsList, ...action.payload];
              state.isLast = action.payload.length < 4; 
              state.isLoadingAdverts = false; 
              state.error = null;                                
            })
        .addCase(fetchAdverts.rejected, handleRejected)
        .addCase(bookedVan.fulfilled, (state, action) => {
        state.booked.push(action.payload);
      })
            
      
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
// export const addToBooked  = advertsSlice.actions.addToBooked; 