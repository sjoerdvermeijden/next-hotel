import React, { useState, useContext } from "react";

import { BsChevronUp } from "react-icons/bs";

import { FiltersWrapper } from "./Style";

import { FilterContext } from "../../context/FilterContext";

function Filters() {
  const [filters, setFilters] = useContext(FilterContext);
  const [filteredItems, setFilteredItems] = useState([])

  const listFunction = (e) => {
    const listItem = e.target;
    const parentList = listItem.closest('.filter-list__item');

    const filterList = Array.from(parentList.querySelectorAll("li.filter__item"));

    const newArray = filterList
      .filter((item) => item.querySelector("input:checked"))
      .map((item) => item.querySelector("input").id);

    if (parentList.classList.contains('js-type')) {
      setFilters(prevState => ({...prevState, type: newArray}));
    }

    if (parentList.classList.contains('js-facilities')) {
      setFilters(prevState => ({...prevState, facilities: newArray}));
    }
    if (parentList.classList.contains('js-stars')) {
      setFilters(prevState => ({...prevState, stars: newArray}));
    }

  };

  const openFunction = (e) => {
    const title = e.target.parentNode;
    const filter = title.parentNode;
    
    filter.classList.toggle('is-open');
  }

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
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="wifi"
                  />
                  <label className="filter__label" htmlFor="wifi">
                    Wifi
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="spa"
                  />
                  <label className="filter__label" htmlFor="spa">
                    Spa
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="parking"
                  />
                  <label className="filter__label" htmlFor="parking">
                    Parking
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="gym"
                  />
                  <label className="filter__label" htmlFor="gym">
                    Gym
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="pool"
                  />
                  <label className="filter__label" htmlFor="pool">
                    Pool
                  </label>
                </li>
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
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="1"
                  />
                  <label className="filter__label" htmlFor="1">
                    1
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="2"
                  />
                  <label className="filter__label" htmlFor="2">
                    2
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="3"
                  />
                  <label className="filter__label" htmlFor="3">
                    3
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="4"
                  />
                  <label className="filter__label" htmlFor="4">
                    4
                  </label>
                </li>
                <li className="filter__item">
                  <input
                    type="checkbox"
                    className="filter__checkbox"
                    name=""
                    id="5"
                  />
                  <label className="filter__label" htmlFor="5">
                    5
                  </label>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </FiltersWrapper>
    </>
  );
}

export default Filters;
