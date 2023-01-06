import { configureStore } from '@reduxjs/toolkit';
import getContatoSlice from '../features/contatoSlice';


export const store = configureStore({
  reducer:{
    contato: getContatoSlice
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

