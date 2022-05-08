import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_POKEMONS } from "../graphql/queries";
import PokemonsTable from "./PokemonsTable";

interface IProps {
  filterName: string;
}

const PokemonTableSearch = ({ filterName }: IProps) => {
  const { data, loading, fetchMore } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 20,
    },
  });

  useEffect(() => {
    fetchMore({
      variables: {
        q: filterName,
      },
    });
  }, [filterName, fetchMore]);

  if (loading) return <h1>Loading...</h1>;

  const nodes = data.pokemons.edges.map((edge) => edge.node);
  const pageInfo = data.pokemons.pageInfo;

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
              q: filterName,
            },
          });
        }
      }}
    />
  );
};

export default PokemonTableSearch;
