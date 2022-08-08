import React from "react";
import { useEffect, useState } from "react";

import styled from 'styled-components';

import Head from "next/head";

import { HotelWrapper } from "../../components/Styles/Style";

import Layout from "../../components/Layout/Layout";
import Block from "../../components/Block/Block";
import Wrap from "../../components/Wrap/Wrap";

import { useRouter } from "next/router";
import { data } from "../../hotels";

import { BsFillStarFill } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export const StyledLink = styled.a`
  color: var(--darkgray);
  text-decoration: none;

  .breadcrumb {

    &__label {
      display: inline-block;
      transition: transform .3s ease;
    }

  }

  &:hover,
  &:focus {

    .breadcrumb {

      &__label {
        transform: translateX(10px);
      }

    }

  }

`;

function HotelPage() {
  const [hotelState, setHotelState] = useState();
  const [ratingState, setRatingState] = useState(0);
  const [ratingClass, setRatingClass] = useState('');

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

  const classFunction = () => {
    if (ratingState.toFixed(0)) {
      setRatingClass('hotel__rating')
    }
    
    if (ratingState.toFixed(0) <= 6) {
      setRatingClass('hotel__rating hotel__rating--middle')
    }

    if (ratingState.toFixed(0) <= 3) {
      setRatingClass('hotel__rating hotel__rating--low')
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
    classFunction()
  }, [ratingState])
  

  useEffect(() => {
    ratingFunction();
  }, [hotelState])

  return (
    <>
      <Head>
        {hotelState?.name ? (
          <title>Hotel App | {hotelState?.name}</title>
        ) : (
          <title></title>
        )}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Block>
          <Wrap>
            {hotelState && (
              <>
                <HotelWrapper>
                  <div className="hotel">
                    <div className="hotel__breadcrumbs">
                      <StyledLink href="/">
                        <div className="breadcrumb">
                          <BsArrowLeft size={12} />
                          <span className="breadcrumb__label">
                            Back to homepage
                          </span>
                        </div>
                      </StyledLink>
                    </div>
                    <div className="hotel__header">
                      <h1 className="hotel__title">{hotelState.name}</h1>
                      <ul className="hotel__stars">
                        {[...Array(hotelState.stars)].map(
                          (elementInArray, index) => (
                            <li className="hotel__star" key={Math.random()}>
                              <BsFillStarFill size={12} color="darkorange" />
                            </li>
                          )
                          )}
                      </ul>
                    </div>
                    <p className="hotel__type">{hotelState.type}</p>
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
                          <span className={ratingClass}>
                            {ratingState.toFixed(0)}
                          </span>
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
