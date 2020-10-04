import styled from "styled-components";

export const Grid = styled.div.attrs({
  className: "grid",
})`
  max-width: ${({ theme, maxWidth }) => theme.breakpoints[maxWidth || "xl"]}px;
  margin: 0 auto;
`;

export const Row = styled.div.attrs({
  className: "row",
})`
  display: flex;
  padding: ${({ theme }) => theme.grid.gutter / 2}px;
  margin: ${({ noMargin, theme }) => (noMargin ? 0 : `${theme.grid.gutter}px`)};
`;

export const Col = styled.div.attrs({
  className: "col",
})`
  flex: ${({ size }) => size || 1};
  margin: ${({ theme }) => theme.margin || `0 ${theme.grid.gutter / 2}px`};
  width: 100%;

  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "normal"};
  display: ${({ display }) => display || "block"};

  & .row {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
