import React, { useState, useContext, useEffect } from "react";

import { BsChevronUp, BsChevronRight } from "react-icons/bs";

import { FiltersWrapper } from "./Style";

import { FilterContext } from "../../context/FilterContext";

import { data } from '../../hotels'

import { filterData } from "../../filters";

function Filters() {
  const [filters, setFilters] = useContext(FilterContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [smallestPrice, setSmallestPrice] = useState();
  const [highestPrice, setHighestPrice] = useState();

  const listFunction = (e) => {
    const listItem = e.target;
    const parentList = listItem.closest(".filter-list__item");

    const filterList = Array.from(
      parentList.querySelectorAll("li.filter__item")
    );

    const newArray = filterList
      .filter((item) => item.querySelector("input:checked"))
      .map((item) => item.querySelector("input").id);

    if (parentList.classList.contains("js-type")) {
      setFilters((prevState) => ({ ...prevState, type: newArray }));
    }
    
    if (parentList.classList.contains("js-rating")) {
      setFilters((prevState) => ({ ...prevState, rating: newArray }));
    }

    if (parentList.classList.contains("js-facilities")) {
      setFilters((prevState) => ({ ...prevState, facilities: newArray }));
    }
    if (parentList.classList.contains("js-stars")) {
      setFilters((prevState) => ({ ...prevState, stars: newArray }));
    }
  };

  const openFunction = (e) => {
    const title = e.target.parentNode;
    const filter = title.parentNode;

    filter.classList.toggle("is-open");
  };

  const priceFunction = (e) => {
    e.preventDefault();
    
    const minValue = document.querySelector('.js-minprice').value;
    const maxValue = document.querySelector('.js-maxprice').value;

    setFilters((prevState) => ({ ...prevState, minPrice: minValue }));
    
    setFilters((prevState) => ({ ...prevState, maxPrice: maxValue }));
    
  }

  useEffect(() => {
    const priceArray = data.map((item) => item.price)
    setSmallestPrice(Math.min(...priceArray))
    setHighestPrice(Math.max(...priceArray))
  }, [])

  return (
    <>
      <FiltersWrapper>
        <ul className="filter-list" onChange={(e) => listFunction(e)}>
          <li className="filter-list__item js-type">
            <div className="filter is-open">
              <h3 className="filter__title" onClick={(e) => openFunction(e)}>
                <span className="filter__label">Type</span>
                <BsChevronUp style={{ marginTop: 2 }} size="12px" />
              </h3>
              <ul className="filter__list">
                {filterData[2].type.map((item, index) => {
                  return (    
                    <li className="filter__item" key={index}>
                      <input
                        type="checkbox"
                        className="filter__checkbox"
                        name=""
                        id={item.toLowerCase().replace(/\s+/g, '-')}
                      />
                      <label className="filter__label" htmlFor={item.toLowerCase().replace(/\s+/g, '-')}>
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="filter-list__item js-facilities">
            <div className="filter">
              <h3 className="filter__title" onClick={(e) => openFunction(e)}>
                <span className="filter__label">Facilities</span>
                <BsChevronUp style={{ marginTop: 2 }} size="12px" />
              </h3>
              <ul className="filter__list">
                {filterData[1].facilities.map((item, index) => {
                  return (
                    <li className="filter__item" key={index}>
                      <input
                        type="checkbox"
                        className="filter__checkbox"
                        name=""
                        id={item.toLowerCase().replace(/\s+/g, '-')}
                      />
                      <label className="filter__label" htmlFor={item.toLowerCase().replace(/\s+/g, '-')}>
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="filter-list__item js-stars">
            <div className="filter">
              <h3 className="filter__title" onClick={(e) => openFunction(e)}>
                <span className="filter__label">Stars</span>
                <BsChevronUp style={{ marginTop: 2 }} size="12px" />
              </h3>
              <ul className="filter__list">
                {filterData[0].stars.map((item) => {
                  return (
                    <li className="filter__item" key={item}>
                      <input
                        type="checkbox"
                        className="filter__checkbox"
                        name=""
                        id={item}
                      />
                      <label className="filter__label" htmlFor={item}>
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="filter-list__item js-rating">
            <div className="filter">
              <h3 className="filter__title" onClick={(e) => openFunction(e)}>
                <span className="filter__label">Rating</span>
                <BsChevronUp style={{ marginTop: 2 }} size="12px" />
              </h3>
              <ul className="filter__list">
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id='9-rating'
                  />
                  <label className="filter__label" htmlFor="9-rating">
                    9
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id='8-rating'
                  />
                  <label className="filter__label" htmlFor="8-rating">
                    8
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id='7-rating'
                  />
                  <label className="filter__label" htmlFor="7-rating">
                    7
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id='6-rating'
                  />
                  <label className="filter__label" htmlFor="6-rating">
                    6
                  </label>
                </li>
              </ul>
            </div>
          </li>
          <li className="filter-list__item js-price">
            <div className="filter">
              <h3 className="filter__title" onClick={(e) => openFunction(e)}>
                <span className="filter__label">Price</span>
                <BsChevronUp style={{ marginTop: 2 }} size="12px" />
              </h3>
              <form className="filter__price" onSubmit={(e) => priceFunction(e)}>
                <div className="filter__starting-price">
                  <span className="filter__input-label">€</span>
                  <input type="text" name="" id="" className="filter__input js-minprice" placeholder={`${smallestPrice}`} />
                </div>
                <span className="filter__ending-price">
                  <span className="filter__input-label">tot</span>
                  <input type="text" name="" id="" className="filter__input js-maxprice" placeholder={`${highestPrice}`}/>
                </span>
                <button className="filter__button" type="submit"><BsChevronRight size="10px" /></button>
              </form>
            </div>
          </li>
        </ul>
      </FiltersWrapper>
    </>
  );
}

export default Filters;
