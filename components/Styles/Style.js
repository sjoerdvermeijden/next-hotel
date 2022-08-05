import styled from 'styled-components';

export const HotelWrapper = styled.div`

  .hotel {

    &__breadcrumbs {
      border-bottom: 1px solid var(--lightgray);
      padding-bottom: 15px;
      
      &:not(:last-child) {
        margin-bottom: 15px;
      }

    }

    &__image {

      &:not(:last-child) {
        margin-bottom: 15px;
      }

      img {
        display: block;
        aspect-ratio: 5 / 3;
        object-fit: cover;
        max-width: 900px;
        width: 100%;
      }
    }

    &__header {
      display: flex;
      align-items: center;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

    }

    &__title {

      &:not(:last-child) {
        margin-right: 10px;
      }

    }

    &__container {
      flex-grow: 1;
      padding: 0 0 20px 0;
    }

    &__ratings {
      display: flex;
      align-items: center;
    }

    &__rating {

      &:not(:last-child) {
        margin-right: 10px;
      }

    }

    &__facilities {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      margin: -5px;
    }
    
    &__facility {
      padding: 5px;
    }

    &__facility-label {
      padding: 5px 8px;
      background: var(--lightgray);
      color: var(--darkgray);
      border-radius: 3px;
    }

    &__type {
      font-weight: bold;
    }

    &__adress,
    &__type,
    &__stars {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    &__description {

      &:not(:last-child) {
        margin-bottom: 20px;
      }

    }

    &__rating {
      display: inline-block;
      border-radius: 5px;
      padding: 1px 5px;
      background: green;
      color: white;
      font-weight: bold;

      &--middle {
        background: orange;
      }
      
      &--low {
        background: red;
      }
      
    }

    &__stars {
      display: flex;
      list-style: none;
      margin-top: 5px;
    }

    &__star {
      &:not(:last-child) {
        margin-right: 5px;
      }
    }

    &__reviews,
    &__utilities {
      padding: 20px 0;
      border-top: 1px solid var(--lightgray);
    }

    &__reviews {
      list-style: none;
      border-bottom: 1px solid var(--lightgray);
      padding: 20px 0;
    }

    &__review {
      &:not(:last-child) {
        margin-bottom: 10px;
        padding-bottom: 10px;
      }
    }

    @media (min-width: 768px) {

      &__image {

        &:not(:last-child) {
          margin-bottom: 0;
          margin-right: 20px;
        }

      }

      &__container {
        border-bottom: 1px solid var(--lightgray);
      }

      &__details {
        padding: 0 0 20px 0;
        display: flex;
        align-items: flex-start;
        width: 100%;
        flex-grow: 1;
      }

    }

  }

  .review {

    &__description {
      display: block;
    }

    &__review,
    &__author {
      display: block;
    }

    &__rating {
      display: block;
      font-weight: bold;
      font-size: 18px;
    }

    &__description,
    &__rating,
    &__author {
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;

    svg {

      &:not(:last-child) {
        margin-right: 8px;
      }

    }

    &__label {

    }

  }
`;