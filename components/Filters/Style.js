import styled from 'styled-components';

export const FiltersWrapper = styled.div`

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  
  .filter-list {
    list-style: none;
    background: var(--lightgray);
    padding: 15px;

    &__item {
      
      &:not(:last-child) {
        border-bottom: 1px solid var(--gray);
        padding-bottom: 10px;
      }
      
      &:not(:first-child) {
        padding-top: 10px;
      }

    }

  }

  .filter {
    min-width: 220px;

    &.is-open {

      .filter__title {

        &:not(:last-child) {
          margin-bottom: 8px;
        }

        svg {
          transform: rotate(180deg);
        }

      }

      .filter__list {
        display: block;
      }

    }

    &__label {
      display: inline-block;
      margin-top: 1px;
    }

    &__title {
      display: flex;
      align-items: center;
      transition: transform .3s ease;

      &:focus,
      &:hover {
        cursor: pointer;
      }

    }

    &__label {
      display: inline-block;

      &:hover,
      &:focus {
        cursor: pointer;
      }

      &:not(:last-child) {
        margin-right: auto;
      }

    }

    &__item {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

    }

    &__list {
      display: none;
    }

    &__checkbox {
      display: inline-block;

      &:not(:last-child) {
        margin-right: 10px;
      }

    }

  }

  @media (min-width: 768px) {

    &:not(:last-child) {
      margin-right: 20px;
    }

  }
`;