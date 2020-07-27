import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

//  Slice
const slice = createSlice({
  name: "pokemons",
  initialState: [],
  reducers: {
    pokemonsRecived: (pokemons, action) => {
      pokemons.push(...action.payload.results);
    },
  },
});

const { pokemonsRecived } = slice.actions;

//  Actions
export const loadPokemons = () =>
  apiCallBegan({
    url: `/pokemon?limit=100`,
    onSuccess: pokemonsRecived.type,
  });

export default slice.reducer;
