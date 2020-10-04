import styled, { css } from "styled-components";

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 25px 10px 10px;
`;

export const Arrow = styled.div`
  position: absolute;
  right: 5px;
  pointer-events: none;
`;

export const Label = styled.div`
  margin-right: 5px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.silverChalice};
`;

export const SelectedItem = styled.div`
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
`;

export const List = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 40px;
  width: 100%;
  z-index: 1;
`;

export const ListItem = styled.div`
  cursor: pointer;
  border: solid 1px red;
  border: solid 1px ${({ theme }) => theme.colors.silverChalice};
  background-color: white;
  padding: 10px;
  color: ${({ theme }) => theme.colors.silverChalice};

  &:hover {
    background-color: ${({ theme }) => theme.colors.tamarillo};
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  align-self: center;
  position: relative;
  border: solid 1px ${({ theme }) => theme.colors.silverChalice};
  border-radius: ${({ theme }) => theme.configs.borderRadiusDefault}px;
  user-select: none;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.disabled};
      cursor: default;
      color: ${({ theme }) => theme.colors.silverChalice};
    `}
`;
