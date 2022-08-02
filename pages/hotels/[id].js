import React from "react";
import { useEffect, useState } from "react";

import { HotelWrapper } from "./Style";

import Layout from "../../components/Layout/Layout";
import Block from "../../components/Block/Block";
import Wrap from "../../components/Wrap/Wrap";

import { useRouter } from "next/router";
import { data } from "../../Hotels";

import { BsFillStarFill } from "react-icons/bs";

function HotelPage() {
  const [hotelState, setHotelState] = useState();
  const [ratingState, setRatingState] = useState(0);

  const router = useRouter();
  const { id } = router.query;

  const ratingFunction = () => {
    const newArray = hotelState?.reviews.map((item) => {
      return item.rating;
    })

    if (newArray) {
      const rating = newArray.reduce((partialSum, a) => partialSum + a, 0) / hotelState?.reviews.length;
      setRatingState(rating)
    }

  }

  useEffect(() => {
    if (id) {
      data.map((item) => {
        if (item.id === Number(id)) {
          setHotelState(item);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    ratingFunction();
  }, [hotelState])

  return (
    <>
      <Layout>
        <Block>
          <Wrap>
            {hotelState && (
              <>
                <HotelWrapper>
                  <div className="hotel">
                    <div className="hotel__header">
                      <h1 className="hotel__title">{hotelState.name}</h1>
                      <ul className="hotel__stars">
                        {[...Array(hotelState.stars)].map(
                          (elementInArray, index) => (
                            <li className="hotel__star" key={Math.random()}>
                              <BsFillStarFill size={12} />
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <p className="hotel__description">
                      {hotelState.description}
                    </p>
                    <div className="hotel__details">
                      <figure className="hotel__image">
                        <img src={hotelState.image} alt={hotelState.alt} />
                      </figure>
                      <div className="hotel__container">
                        <p className="hotel__adress">{hotelState.adress}</p>
                        <div className="hotel__ratings">
                          <span className="hotel__rating">{ratingState.toFixed(0)}</span>
                          <p className="hotel__rating-amount">
                            ({hotelState.reviews.length} reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="hotel__utilities">
                      <ul className="hotel__facilities">
                        {hotelState.facilities.map((item) => {
                          return (
                            <li key={Math.random} className="hotel__facility">
                              <div className="hotel__facility-label">
                                {item}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <ul className="hotel__reviews">
                      {hotelState.reviews?.map((item) => {
                        return (
                          <li key={Math.random()} className="hotel__review">
                            <div className="review">
                              <span className="review__rating">
                                {item.rating}/10
                              </span>
                              <span className="review__description">
                                {item.review}
                              </span>
                              <span className="review__author">
                                - {item.author}
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </HotelWrapper>
              </>
            )}
          </Wrap>
        </Block>
      </Layout>
    </>
  );
}

export default HotelPage;
