import styled, { css } from "styled-components";

export const Wrapper = styled.div``;

export const Sup = styled.div`
  text-transform: uppercase;
`;

export const Text = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  line-height: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 1.5rem;
  }
`;

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
  padding: 15px 20px;
  border-bottom: solid 1px #525252;
  color: ${({ theme }) => theme.colors.silverChalice};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex: 1;
  }

  & .button-type__icon {
    margin-right: 15px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
      display: none;
    }
  }

  ${({ selected }) =>
    selected &&
    css`
      border-bottom: solid 4px ${({ theme }) => theme.colors.tamarillo};

      & .button-type__icon {
        color: ${({ theme }) => theme.colors.tamarillo};
      }

      ${Text} {
        color: ${({ theme }) => theme.colors.tamarillo};
      }
    `}
`;
