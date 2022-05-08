import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: relayStylePagination(),
          pokemonsByType: relayStylePagination(),
        },
      },
    },
  }),
});
