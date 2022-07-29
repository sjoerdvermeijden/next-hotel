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

  const filterFunction = (item) => {

    if (filters.stars.length >= 1) {
      const starArray = filters.stars.map((item) => Number(item))
  
      if (starArray.includes(item?.stars)) {
        return item;
      }
    }
   
    if (filters.type.length >= 1) {

      if (filters.type.includes(item?.type.toLowerCase())) {
        return item;
      }
    }

  }

  useEffect(() => {
    filterFunction()
  }, [filters])
  

  return (
    <>
      <HotelList>
        <ul className="hotel-list">
          {data.filter(filterFunction).map((hotel) => {
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
