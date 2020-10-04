import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  margin: 30px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0;
    text-align: center;
  }
`;
