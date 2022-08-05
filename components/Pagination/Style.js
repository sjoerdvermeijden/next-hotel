import styled from 'styled-components';

export const PaginationWrapper = styled.div`

  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;

    &__item {
      
      &:not(:last-child) {
        margin-right: 10px;
      }
      
    }

    &__link {
      display: inline-block;
      padding: 6px 12px;
      text-decoration: none;
      background: var(--lightgray);
      color: var(--darkgray);

      &:hover,
      &:focus {
        cursor: pointer;
        background: var(--lightblue);
        color: white;
      }

    }

  }
`;