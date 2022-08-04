import React, { createContext, useState } from "react";

export const FilterContext = createContext([]);

export function FilterComponent({ children }) {
  const [filters, setFilters] = useState({
    type: [],
    stars: [],
    rating: [],
    facilities: [],
    price: 0
  });

  return (
    <>
      <FilterContext.Provider value={[filters, setFilters]}>
        {children}
      </FilterContext.Provider>
    </>
  );
}

export default FilterComponent;
