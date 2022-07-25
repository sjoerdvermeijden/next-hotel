import React from "react";

import { HotelWrapper } from "./Style";

import { BsFillStarFill } from "react-icons/bs";

function Hotel({
  id,
  name,
  type,
  image,
  adress,
  reviews,
  stars,
  price,
  rating,
  facilities,
  description,
}) {
  return (
    <>
      <HotelWrapper>
        <div className="hotel">
          <figure className="hotel__image">
            <img src={image} alt="" />
          </figure>
          <div className="hotel__container">
            <div className="hotel__content">
              <div className="hotel__title">
                <h3 className="hotel__name">{name}</h3>
                <ul className="hotel__stars">
                  {[...Array(stars)].map((elementInArray, index) => (
                    <li className="hotel__star" key={Math.random()}>
                      <BsFillStarFill size={12} />
                    </li>
                  ))}
                </ul>
              </div>
              <p className="hotel__adress">{adress}</p>
              <p className="hotel__description">{description}</p>
              <p className="hotel__type">{type}</p>
              <ul className="hotel__facilities">
                {
                  facilities.map((item) => {
                    return <li key={Math.random()} className="hotel__facility">{item}</li>
                  })
                }
              </ul>
            </div>
            <div className="hotel__details">
              <p className="hotel__price">€{price}</p>
              <p className="hotel__rating">{rating}</p>
              <span className="hotel__reviews">
                {
                (reviews?.length > 0) ? `${reviews.length} reviews` : ''
                }
              </span>
            </div>
          </div>
        </div>
      </HotelWrapper>
    </>
  );
}

export default Hotel;
