import { createSlice } from '@reduxjs/toolkit';
import { bookedVan, fetchAdverts } from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const advertsSlice = createSlice({
	name: 'adverts',
	initialState: {
		advertsList: [],
		favorites: [],
		booked: [],
		isLast: true,
		isFetchLoading: false,
		isBookedLoading: false,
		fetchError: null,
		bookedError: null,
	},
	reducers: {
		addToFavorites: (state, action) => {
			state.favorites.push(action.payload);
		},
		removeFromFavorites: (state, action) => {
			state.favorites = state.favorites.filter(
				advert => advert._id !== action.payload._id
			);
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchAdverts.pending, state => {
				state.isFetchLoading = true;
			})
			.addCase(fetchAdverts.fulfilled, (state, action) => {
				state.advertsList = [...action.payload];
				state.isLast = action.payload.length < 4;
				state.isFetchLoading = false;
				state.fetchError = null;
			})
			.addCase(fetchAdverts.rejected, (state, action) => {
				state.isFetchLoading = false;
				state.fetchError = action.payload;
			})


			.addCase(bookedVan.pending, state => {
				state.isBookedLoading = true;
			})
			.addCase(bookedVan.fulfilled, (state, action) => {
				state.booked.push(action.payload);
				state.isBookedLoading = false;
				state.bookedError = null;
			})
			.addCase(bookedVan.rejected, (state, action) => {
				state.isBookedLoading = false;
				state.bookedError = action.payload;
			});
	},
});

const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['favorites'],
};

export const advertsReducer = persistReducer(
	persistConfig,
	advertsSlice.reducer
);
export const addToFavorites = advertsSlice.actions.addToFavorites;
export const removeFromFavorites = advertsSlice.actions.removeFromFavorites;
