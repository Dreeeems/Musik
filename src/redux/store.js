import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { DeezerApi } from './services/DeezerApi';

export const store = configureStore({
  reducer: {
    [DeezerApi.reducerPath]: DeezerApi.reducer,
    player: playerReducer,
  },
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(DeezerApi.middleware),
});
