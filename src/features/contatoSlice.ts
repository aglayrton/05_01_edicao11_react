import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import Contatos from "../models/contatoModels";

const baseUrl = "https://backend-edicao-10-front-iii.vercel.app";

//GET
export const getContatos = createAsyncThunk(
  //nome do diasparo da action
  "/contatos/all",
  //funcao promise
  async () => {
    const response : Contatos[] = await axios
      .get(baseUrl)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
      });
      return response;
  }
);

//POST
export const addContatos = createAsyncThunk(
  //nome do diasparo da action
  "/contatos/created",
  //funcao promise
  async (contatos: Contatos) => {
    const response : Contatos[] = await axios
      .post(baseUrl, {
        nome: contatos.nome,
        email: contatos.email,
        telefone: contatos.telefone,
      }).then(response=>response.data);
      return response;
  }
);

//Tipo
interface ContatosInitial {
  data: null | Contatos[];
  loading: boolean;
  error: null;
}

//coloco os estado necessários (dados da api, carregamento, error)
const initialState = {
  data: null,
  loading: false,
  error: null,
} as ContatosInitial;

const getContatoSlice = createSlice({
  name: "contatos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    //espera
    //contrutos.caso(estado_api, arrow(estdo,))
    builder.addCase(getContatos.pending, (state, action) => {
      state.loading = true;
    }).addCase(getContatos.fulfilled, (state, action: PayloadAction<Contatos[]>) => {
      state.data = action.payload;
      state.loading = false;
    }).addCase(getContatos.rejected, (state, action) => {
      state.error = null;
    });

    builder.addCase(addContatos.pending, (state, action) => {
      state.loading = true;
    }).addCase(addContatos.fulfilled, (state, action: PayloadAction<Contatos[]>) => {
      state.data = action.payload;
      state.loading = false;
    })
  },
});

export default getContatoSlice.reducer;
