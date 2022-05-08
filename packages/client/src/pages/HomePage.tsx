import { useState } from "react";
import Navbar from "../organisms/Navbar";
import PokemonTableByType from "../organisms/PokemonTableByType";
import PokemonTableSearch from "../organisms/PokemonTableSearch";
import PageTemplate from "../templates/PageTemplate";

const HomePage = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [activeType, setActiveType] = useState("all");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (activeType !== "all") {
      setActiveType("all");
    }
    setNameFilter(e.target.value);
  };

  const handleSelectChange = (value: string) => {
    setNameFilter("");
    setActiveType(value);
  };

  return (
    <PageTemplate>
      <Navbar
        inputValue={nameFilter}
        inputChange={inputChange}
        inputPlaceholder="Pokemon Name"
        selectValue={activeType}
        selectChange={handleSelectChange}
      />
      {activeType === "all" ? (
        <PokemonTableSearch filterName={nameFilter} />
      ) : (
        <PokemonTableByType type={activeType} />
      )}
    </PageTemplate>
  );
};

export default HomePage;
