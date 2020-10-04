import styled, { css } from "styled-components";

export const Container = styled.div`
  display: ${({ icon }) => (icon ? "flex" : "inline-block")};
  align-items: center;
  align-self: center;
  border-radius: ${({ theme }) => theme.configs.borderRadiusDefault}px;
  background-color: ${({ theme }) => theme.colors.silverChalice};
  border: solid 2px transparent;
  width: fit-content;
  padding: 10px 30px;
  cursor: pointer;
  user-select: none;
  line-height: 1;
  color: ${({ theme }) => theme.colors.tamarillo};
  font-weight: ${({ strong }) => (strong ? "900" : "400")};

  & .big {
    font-size: 38px;
  }

  ${({ variant }) =>
    variant === "warning" &&
    css`
      background-color: ${({ theme }) => theme.colors.diSerria};
      border-color: ${({ theme }) => theme.colors.diSerria};
      color: ${({ theme }) => theme.colors.diSerria};

      &.warning--outline {
        background-color: transparent;
      }
    `};

  ${({ variant }) =>
    variant === "link" &&
    css`
      background-color: transparent;
      border-color: transparent;
      padding: 0;
    `};

  ${({ variant }) =>
    variant === "danger" &&
    css`
      background-color: ${({ theme }) => theme.colors.tamarillo};
      border-color: ${({ theme }) => theme.colors.tamarillo};
      color: white;
    `};
`;

export const Icon = styled.div`
  margin-top: 3px;
`;
