import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query GET_POKEMONS($q: String, $after: ID, $limit: Int) {
    pokemons(q: $q, after: $after, limit: $limit) {
      edges {
        cursor
        node {
          id
          name
          types
          classification
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_POKEMONS_BY_TYPE = gql`
  query PokemonsByType($type: String!, $after: ID, $limit: Int) {
    pokemonsByType(type: $type, after: $after, limit: $limit) {
      edges {
        cursor
        node {
          id
          name
          types
          classification
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
