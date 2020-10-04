import styled from "styled-components";
import SimpleCheckbox from "react-simple-checkbox";

export const Container = styled.div.attrs({
  className: "checkbox",
})``;

export const CustomSimpleCheckbox = styled(SimpleCheckbox).attrs({
  size: 2,
  tickSize: 3,
  borderThickness: 1,
  tickAnimationDuration: 100,
  color: {
    backgroundColor: "#fff",
    borderColor: `${({ theme }) => theme.colors.silverChalice}`,
    uncheckedBorderColor: "#d8dcdd",
    tickColor: "#ca242e",
  },
})``;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.silverChalice};
`;
