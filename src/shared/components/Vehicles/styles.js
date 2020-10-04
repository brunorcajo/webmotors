import styled from "styled-components";

export const Container = styled.div`
  & .col {
    display: grid;
    grid-gap: ${({ theme }) => theme.grid.gutter}px;
    grid-template-columns: repeat(4, 1fr);

    margin: 50px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
