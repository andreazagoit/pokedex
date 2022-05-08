import { pokemonTypes } from "../data/pokemonTypes";

export const getColorByType = (type) => {
  return pokemonTypes.find((pokemonType) => pokemonType.name === type).color;
};
