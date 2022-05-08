import { SearchOutlined } from "@ant-design/icons";
import { Input, Layout, Select } from "antd";
import styled from "styled-components";
import { pokemonTypes } from "../data/pokemonTypes";

const { Header } = Layout;
const { Option } = Select;

interface IProps {
  inputValue?: string;
  inputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputPlaceholder?: string;
  selectValue?: string;
  selectChange?: (value: string) => void;
}

const Navbar = ({
  inputValue,
  inputChange,
  inputPlaceholder,
  selectValue,
  selectChange,
}: IProps) => {
  return (
    <HeaderContainer>
      <div className="logo">Pokedex</div>
      <MenuContent>
        <StyledInput
          placeholder={inputPlaceholder}
          value={inputValue}
          onChange={inputChange}
          prefix={<SearchOutlined />}
        />
        <StyledSelect
          onChange={selectChange}
          defaultValue="all"
          optionFilterProp="children"
          value={selectValue}
        >
          <Option value="all">All</Option>
          {pokemonTypes.map((type) => (
            <Option value={type.name} key={type.name}>
              {type.name}
            </Option>
          ))}
        </StyledSelect>
      </MenuContent>
    </HeaderContainer>
  );
};

export default Navbar;

const HeaderContainer = styled(Header)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  height: inherit;
  min-height: 64px;

  .logo {
    font-size: 24px;
    color: white;
  }
`;

const MenuContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  height: 64px;
`;

const StyledInput = styled(Input)`
  max-width: 200px;
`;

const StyledSelect = styled(Select)`
  width: 120px;
`;
