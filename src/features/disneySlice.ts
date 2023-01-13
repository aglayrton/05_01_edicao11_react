import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Disney from "../models/disneyModels";

const baseUrl = "https://api.disneyapi.dev/characters";

//GET ACTIONS
export const getDisney = createAsyncThunk(
  //nome do disparo da action
  "/contatos/all",
  //funcao promise
  async () => {
    const response: Disney[] = await axios.get(baseUrl).then(res=>res.data.data).catch(err=>err.message);
    return response;
  }
);

//Tipo
interface DisneyInitial {
  response: null | Disney[];
  loading: boolean;
  error: null;
}

//coloco os estado necessários (dados da api, carregamento, error)
const initialState = {
  response: null,
  loading: false,
  error: null,
} as DisneyInitial;

//FUNCAO DE PEDAÇOS DE REDUCERS
const getDisneySlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //espera
    //contrutos.caso(estado_api, arrow(estdo,))
    builder
      .addCase(getDisney.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(
        getDisney.fulfilled,
        (state, action: PayloadAction<Disney[]>) => {
          state.response = action.payload;
          state.loading = false;
        }
      );
  },
});

export default getDisneySlice.reducer;
