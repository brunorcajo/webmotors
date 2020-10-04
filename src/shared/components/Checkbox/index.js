import React from "react";
import PropTypes from "prop-types";

import { Container, CustomSimpleCheckbox, Label } from "./styles";

const Checkbox = ({ label, onChange, checked, value, ...rest }) => {
  return (
    <Container {...rest}>
      <CustomSimpleCheckbox
        checked={checked}
        onChange={() => {
          onChange(value);
        }}
      />
      <Label>{label}</Label>
    </Container>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  value: PropTypes.string,
};

export default Checkbox;
