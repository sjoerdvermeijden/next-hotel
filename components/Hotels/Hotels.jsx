import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import Hotel from "../Hotel/Hotel";

import { FilterContext } from "../../context/FilterContext";

import { HotelList } from "./Style";

import { data } from "../../Hotels";

export const StyledLink = styled.a`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: var(--darkgray);
`;

function Hotels() {
  const [filters, setFilters] = useContext(FilterContext);
  const [filteredItems, setFilteredItems] = useState([]);

  const filterFunction = () => {
    
    const newArray = data.filter((item) => {

      if (filters.stars.length >= 1) {
        const starArray = filters.stars.map((item) => Number(item));

        if (starArray.includes(item?.stars)) {
          return item;
        }
      }

      if (filters.facilities.length >= 1) {
    
        if (filters.facilities.some(r=> item?.facilities.map((item) => item.toLowerCase()).includes(r))) {
          return item;
        }
      }

      if (filters.type.length >= 1) {

        if (filters.type.includes(item?.type.toLowerCase())) {
          return item;
        }
      }
      
    });

    setFilteredItems(newArray);
  };

  useEffect(() => {
    filterFunction();
  }, [filters]);

  return (
    <>
      <HotelList>
        <ul className="hotel-list">
          {filteredItems.length < 1
            ? data.map((hotel, index) => {
                return (
                  <li key={hotel.id} className="hotel-list__item">
                    <StyledLink href={`/hotels/${hotel.id}`}>
                      <Hotel {...hotel} />
                    </StyledLink>
                  </li>
                );
              })
            : filteredItems.map((hotel) => {
                return (
                  <li key={hotel.id} className="hotel-list__item">
                    <StyledLink href={`/hotels/${hotel.id}`}>
                      <Hotel {...hotel} />
                    </StyledLink>
                  </li>
                );
              })}
        </ul>
      </HotelList>
    </>
  );
}

export default Hotels;
