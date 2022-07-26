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
      padding: 10px;
      
      &:not(:last-child) {
        border-bottom: 1px solid var(--gray);
      }

    }

  }

  .filter {
    min-width: 220px;

    &__label {
      display: inline-block;
      margin-top: 1px;

      &:focus,
      &:hover {
        cursor: pointer;
      }

    }

    &__title,
    &__item {
      display: flex;

      &:not(:last-child) {
        margin-bottom: 8px;
      }

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