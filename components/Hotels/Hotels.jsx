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
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterLength, setFilterLength] = useState(false);
  const [showPagination, setShowPagination] = useState(true);

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
      // Type filter
      if (filters.type.length >= 1) {
        if (
          filters.type.includes(item?.type.toLowerCase().replace(/\s+/g, "-"))
        ) {
          return item;
        }
      }

      // Star filter
      if (filters.stars.length >= 1) {
        const starArray = filters.stars.map((item) => Number(item));

        if (starArray.includes(item?.stars)) {
          return item;
        }
      }

      // Rating filter
      if (filters.rating.length >= 1) {
        const ratingArray = filters.rating.map((item) =>
          Number(item.charAt(0))
        );

        if (ratingArray.includes(item.rating)) {
          return item;
        }
      }

      // Facility filter
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

      // Price filter
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
    const filteredArray = filteredItems.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    setFilteredPosts(filteredArray);
  };

  useEffect(() => {
    filterFunction();

    if (
      filters.type.length > 0 ||
      filters.facilities.length > 0 ||
      filters.stars.length > 0 ||
      filters.rating.length > 0
    ) {
      setFilterLength(true);
    } else {
      setFilterLength(false);
    }
  }, [filters]);

  useEffect(() => {
    getFilteredPosts();
  }, [filteredItems]);

  useEffect(() => {

    if (filteredItems.length < 1 && filterLength) {
      setShowPagination(false);
    } else if (filteredItems.length < 1) {
      setShowPagination(true);
    } else if (filteredItems.length < 5) {
      setShowPagination(false);
    } else {
      setShowPagination(true);
    }
  }, [filteredItems]);

  return (
    <>
      <HotelList>
        <ul className="hotel-list">
          {filterLength
            ? filteredItems.map((hotel) => {
                return (
                  <li key={hotel.id} className="hotel-list__item">
                    <StyledLink href={`/hotels/${hotel.id}`}>
                      <Hotel {...hotel} />
                    </StyledLink>
                  </li>
                );
              })
            : currentPosts.map((hotel) => {
                return (
                  <li key={hotel.id} className="hotel-list__item">
                    <StyledLink href={`/hotels/${hotel.id}`}>
                      <Hotel {...hotel} />
                    </StyledLink>
                  </li>
                );
              })}
        </ul>

        {showPagination && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        )}

      </HotelList>
    </>
  );
}

export default Hotels;
