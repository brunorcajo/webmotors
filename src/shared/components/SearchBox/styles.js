import styled from "styled-components";

export const Container = styled.div`
  & .search-box {
    &__input--location {
      flex: 1;
      border-right: none;
    }
    &__dropdown--radius {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const ButtonList = styled.div`
  display: flex;

  & .reset-button {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.silverChalice};
  }

  & .submit-button {
    font-size: 1.2rem;
    padding: 15px 90px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
      padding: 15px;
    }
  }
`;

export const Header = styled.header`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    & .row {
      flex-direction: column;

      & .types {
        margin-top: 20px;
        order: 1;
      }
    }
  }
`;

export const Content = styled.div`
  background-color: white;
  padding: 30px 50px;
  box-shadow: 4px 4px 13px -5px rgba(0, 0, 0, 0.42);
  border-radius: ${({ theme }) => theme.configs.borderRadiusDefault}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    padding: 30px 15px;

    & .row {
      flex-direction: column;
      margin: 0;

      & > .col {
        margin: 0 0 ${({ theme }) => theme.grid.gutter}px 0;

        &.model {
          margin: 0;
        }
      }
    }
    & .version {
      order: -1;
    }
  }
`;

export const WrapperCheckbox = styled.div`
  display: flex;
  & > .checkbox:first-child {
    margin-right: 20px;
  }
`;
