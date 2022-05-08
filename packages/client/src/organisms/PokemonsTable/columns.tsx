import { Tag } from "antd";
import { getColorByType } from "../../utils/getColorByType";

export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    width: 50,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "20%",
  },
  {
    title: "Types",
    dataIndex: "types",
    key: "types",
    render: (types) => {
      return (
        <>
          {types.map((type) => (
            <Tag key={type} color={getColorByType(type)}>
              {type}
            </Tag>
          ))}
        </>
      );
    },
  },
  {
    title: "Classification",
    dataIndex: "classification",
    key: "classification",
  },
];
