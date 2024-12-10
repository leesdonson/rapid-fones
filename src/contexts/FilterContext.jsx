import { createContext, useState } from "react";

const defaultValue = {
  selectedCategory: "",
  setSelectedCategory: (category) => category,
};

const FilterContext = createContext(defaultValue);

const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <FilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };
