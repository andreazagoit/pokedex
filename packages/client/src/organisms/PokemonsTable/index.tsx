import { Button, Table } from "antd";
import styled from "styled-components";
import { IPokemon } from "../../models/pokemon";
import { columns } from "./columns";

interface IProps {
  dataSource: IPokemon[];
  loading: boolean;
  hasNextPage: boolean;
  onLoadMore: () => void;
}

const PokemonsTable = ({
  dataSource,
  loading,
  hasNextPage,
  onLoadMore,
}: IProps) => {
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        loading={loading}
        rowKey={(record) => record.id}
        pagination={false}
        scroll={{ scrollToFirstRowOnChange: false }}
      />
      {hasNextPage && (
        <TableFooter>
          <Button onClick={onLoadMore}>Load More</Button>
        </TableFooter>
      )}
    </>
  );
};

export default PokemonsTable;

const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;
