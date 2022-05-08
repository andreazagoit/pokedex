import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_POKEMONS_BY_TYPE } from "../graphql/queries";
import PokemonsTable from "./PokemonsTable";

interface IProps {
  type: string;
}

const PokemonTableByType = ({ type }: IProps) => {
  const { data, loading, fetchMore, error } = useQuery(GET_POKEMONS_BY_TYPE, {
    variables: {
      limit: 10,
      type,
    },
  });

  useEffect(() => {
    fetchMore({
      variables: {
        type,
      },
    });
  }, [type, fetchMore]);

  if (loading) return <h1>Loading...</h1>;

  const nodes = data.pokemonsByType.edges.map((edge) => edge.node);
  const pageInfo = data.pokemonsByType.pageInfo;

  return (
    <PokemonsTable
      dataSource={nodes}
      loading={loading}
      hasNextPage={pageInfo.hasNextPage}
      onLoadMore={() => {
        if (pageInfo.hasNextPage) {
          fetchMore({
            variables: {
              after: pageInfo.endCursor,
              type: type,
            },
          });
        }
      }}
    />
  );
};

export default PokemonTableByType;
