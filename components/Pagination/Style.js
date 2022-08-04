import styled from 'styled-components';

export const PaginationWrapper = styled.div`

  .pagination {
    list-style: none;
    display: flex;
    justify-content: center;

    &__item {
      border-left: 1px solid var(--darkgray);
      border-top: 1px solid var(--darkgray);
      border-bottom: 1px solid var(--darkgray);

      &:last-child {
        border-right: 1px solid var(--darkgray);
      }

    }

    &__link {
      display: inline-block;
      padding: 6px 12px;
      text-decoration: none;
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