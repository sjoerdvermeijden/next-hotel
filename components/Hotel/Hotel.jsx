import React, { useState, useEffect } from "react";

import { HotelWrapper } from "./Style";

import { data } from '../../Hotels' 

import { BsFillStarFill } from "react-icons/bs";

function Hotel({id,name,type,image,adress,reviews,stars,price,facilities,description,}) {
  const [ratingState, setRatingState] = useState(0);

  const ratingFunction = () => {

    const newArray = reviews.map((item) => {
      return item.rating;
    })

    const rating = newArray.reduce((partialSum, a) => partialSum + a, 0) / reviews.length;
    setRatingState(rating)

    data.forEach((hotel) => {
      if (hotel.id === id) {
        hotel.rating = rating;
      }
    })
  }

  useEffect(() => {
    ratingFunction();

    console.log(ratingState)
  }, [])

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
                    <li className="hotel__star" key={index}>
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
                  facilities.map((item, index) => {
                    return <li key={index} className="hotel__facility">{item}</li>
                  })
                }
              </ul>
            </div>
            <div className="hotel__details">
              <p className="hotel__price">€{price}</p>
              <p className="hotel__rating">{ratingState.toFixed(0)}</p>
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
