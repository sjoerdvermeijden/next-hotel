import React, { createContext, useState } from "react";

export const FilterContext = createContext([]);

export function FilterComponent({ children }) {
  const [filters, setFilters] = useState({
    type: [],
    stars: [],
    rating: [],
    facilities: [],
    minPrice: 0,
    maxPrice: 0
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
