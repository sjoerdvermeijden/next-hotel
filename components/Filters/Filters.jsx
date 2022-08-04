import React, { useState, useContext, useEffect } from "react";

import { BsChevronUp } from "react-icons/bs";

import { FiltersWrapper } from "./Style";

import { FilterContext } from "../../context/FilterContext";

import { data } from "../../filters";

import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

function Filters() {
  const [filters, setFilters] = useContext(FilterContext);
  const [filteredItems, setFilteredItems] = useState([]);

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
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="hotel"
                  />
                  <label className="filter__label" htmlFor="hotel">
                    Hotel
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="bb"
                  />
                  <label className="filter__label" htmlFor="bb">
                    Bed & Breakfast
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="motel"
                  />
                  <label className="filter__label" htmlFor="motel">
                    Motel
                  </label>
                </li>
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
                {data[1].facilities.map((item, index) => {
                  return (
                    <li className="filter__item" key={index}>
                      <input
                        type="checkbox"
                        className="filter__checkbox"
                        name=""
                        id={item.toLowerCase()}
                      />
                      <label className="filter__label" htmlFor={item.toLowerCase()}>
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
                {data[0].stars.map((item) => {
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
                {data[3].rating.map((item) => {
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
          <li className="filter-list__item js-price">
            <div className="filter">
              <h3 className="filter__title" onClick={(e) => openFunction(e)}>
                <span className="filter__label">Price</span>
                <BsChevronUp style={{ marginTop: 2 }} size="12px" />
              </h3>
              <div className="filter__slider">
                <Slider />
              </div>
            </div>
          </li>
        </ul>
      </FiltersWrapper>
    </>
  );
}

export default Filters;
