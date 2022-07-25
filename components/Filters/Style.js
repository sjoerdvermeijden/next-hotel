import styled from 'styled-components';

export const FiltersWrapper = styled.div`

  &:not(:last-child) {
    margin-bottom: 20px;
  }
  
  .filter-list {
    list-style: none;
    margin: -10px;

    &__item {
      padding: 10px;
    }

  }

  .filter {
    padding: 15px;
    background: var(--lightgray);
    min-width: 250px;

    &__label {
      display: inline-block;

      &:focus,
      &:hover {
        cursor: pointer;
      }

    }

    &__title,
    &__item {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 5px;
      }

    }

    &__checkbox {
      display: inline-block;
      margin-top: 1px;

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