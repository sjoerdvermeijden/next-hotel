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

  // This works
  const runFunction = (item, filters) => {
    const newArray = data.filter((item) => {
      if (filters.some(r=> item.facilities.includes(r))) {
        return true;
      } else {
        return false;
      }
    })
  }

  useEffect(() => {
    runFunction()
  }, [])
  

  return (
    <>
      <HotelList>
        <ul className="hotel-list">
          {data
            .filter(
              (item) =>
                filters.length === 0 ||
                filters.includes(item.type.toLowerCase()) ||
                filters.includes(item.stars.toString())
            )
            .map((hotel) => {
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
