import styled from 'styled-components';

export const HotelList = styled.div`
  flex-grow: 1;

  .hotel-list {
    list-style: none;
    margin: -10px;

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    &__item {
      padding: 10px;
    }

  }
`;