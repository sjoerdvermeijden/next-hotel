import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import Hotel from "../Hotel/Hotel";
import Pagination from "../Pagination/Pagination";

import { FilterContext } from "../../context/FilterContext";

import { HotelList } from "./Style";

import { data } from "../../hotels";

export const StyledLink = styled.a`
  display: inline-block;
  width: 100%;
  text-decoration: none;
  color: var(--darkgray);
`;

function Hotels() {
  const [filters, setFilters] = useContext(FilterContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterFunction = () => {
    const newArray = data.filter((item) => {
      if (filters.type.length >= 1) {
        if (
          filters.type.includes(item?.type.toLowerCase().replace(/\s+/g, "-"))
        ) {
          return item;
        }
      }

      if (filters.stars.length >= 1) {
        const starArray = filters.stars.map((item) => Number(item));

        if (starArray.includes(item?.stars)) {
          return item;
        }
      }

      if (filters.rating.length >= 1) {
        const ratingArray = filters.rating.map((item) =>
          Number(item.charAt(0))
        );

        if (ratingArray.includes(item.rating)) {
          return item;
        }
      }

      if (filters.facilities.length >= 1) {
        if (
          filters.facilities.some((r) =>
            item?.facilities
              .map((item) => item.toLowerCase().replace(/\s+/g, "-"))
              .includes(r.toLowerCase().replace(/\s+/g, "-"))
          )
        ) {
          return item;
        }
      }

      if (filters.minPrice && !filters.maxPrice) {
        if (item.price >= filters.minPrice) {
          return item;
        }
      } else if (!filters.minPrice && filters.maxPrice) {
        if (item.price <= filters.maxPrice) {
          return item;
        }
      } else if (filters.minPrice && filters.maxPrice) {
        if (item.price >= filters.minPrice && item.price <= filters.maxPrice) {
          return item;
        }
      } else if (!filters.minPrice && !filters.maxPrice) {
        return false;
      }
    });

    setFilteredItems(newArray);
  };

  const getFilteredPosts = () => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const filteredArray = filteredItems.slice(indexOfFirstPost, indexOfLastPost);
    setFilteredPosts(filteredArray);
  };

  useEffect(() => {
    filterFunction();
  }, [filters]);

  useEffect(() => {
    getFilteredPosts();
  }, [filteredItems]);

  return (
    <>
      <HotelList>
        <ul className="hotel-list">
          {filteredItems.length < 1
            ? currentPosts.map((hotel) => {
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

        {filteredItems.length < 1 ? (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        ) : (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={filteredItems.length}
            paginate={paginate}
          />
        )}
      </HotelList>
    </>
  );
}

export default Hotels;
