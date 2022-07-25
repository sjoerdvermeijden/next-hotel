import React, { createContext, useState } from "react";

export const FilterContext = createContext([]);

export function FilterComponent({ children }) {
  const [filters, setFilters] = useState([]);

  return (
    <>
      <FilterContext.Provider value={[filters, setFilters]}>
        {children}
      </FilterContext.Provider>
    </>
  );
}

export default FilterComponent;
