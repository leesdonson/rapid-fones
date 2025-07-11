import { createContext, useState } from "react";

const defaultValue = {
  selectedCategory: "",
  selectedBrand: "",
  searchTerm: "",
  setSearchTerm: (term) => term,
  setSelectedCategory: (category) => category,
  setSelectedBrand: (brand) => brand,
  // setSelectedCategory: (category) => category,
};

const FilterContext = createContext(defaultValue);

const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <FilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
