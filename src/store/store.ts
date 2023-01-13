import { configureStore } from "@reduxjs/toolkit";
import getContatoSlice from "../features/contatoSlice";
import getDisneySlice from "../features/disneySlice";

//FUNCAO QUE TEM OS REDUCERS (FUNCAO)
export const store = configureStore({
  reducer: {
    contato: getContatoSlice,
    disney: getDisneySlice,
  },
});

//MEU ESTADO INICIAL
export type RootState = ReturnType<typeof store.getState>;

//DISPARAR AS ACTIONS
export type AppDispatch = typeof store.dispatch;
