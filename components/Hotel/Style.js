import styled from 'styled-components';

export const HotelWrapper = styled.div`
  padding: 15px;
  background: var(--lightgray);

  .hotel {
    display: flex;

    &__content {
      margin-right: auto;
    }

    &__details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__title {
      display: flex;
      align-items: center;
    }

    &__facilities {
      display: none;
      list-style: none;
    }

    &__facility {
      font-size: 12px;
      padding: 3px 5px;
      background: var(--darkgray);
      color: white;
      border-radius: 3px;

      &:not(:last-child) {
        margin-right: 8px;
      }

    }

    &__name {
      font-size: 22px;

      &:not(:last-child) {
        margin-right: 10px;
      }

    }

    &__stars {
      display: flex;
      list-style: none;
      margin-top: 2px;
    }

    &__star {

      &:not(:last-child) {
        margin-right: 5px;
      }

    }

    &__image {
      display: none;

      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
      }
      
      &:not(:last-child) {
        margin-right: 15px;
      }

    }

    &__description,
    &__title,
    &__price,
    &__adress,
    &__stars,
    &__type {

      &:not(:last-child) {
        margin-bottom: 10px;
      }
      
    }

    &__price {
      font-size: 22px;
    }
    
    &__price,
    &__type {
      font-weight: bold;
    }

    &__reviews {
      font-size: 12px;
    }

  }

  .hotel-reviews {
    display: flex;
    align-items: center;

    &__label {
      padding: 1px 5px;
      background: green;
      color: white;
      font-weight: bold;
      border-radius: 3px;
      font-size: 16px;
    }

    &__reviews {

      &:not(:last-child) {
        margin-right: 10px;
      }

    }

  }

  @media (min-width: 468px) {

    .hotel {

      &__image {
        display: flex;
      }

    }

  }

  @media (min-width: 768px) {

    .hotel {
      
    }
    
  }
  
  @media (min-width: 968px) {

    .hotel {

      &__details {
        align-items: flex-end;
      }

      &__image {
        display: flex;
      }

      &__container {
        display: flex;
        flex-grow: 1;
      }

      &__facilities {
        display: flex;
      }

    }

  }

`;