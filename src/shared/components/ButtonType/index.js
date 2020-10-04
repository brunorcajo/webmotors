import React from "react";
import PropTypes from "prop-types";

import { Container, Wrapper, Sup, Text } from "./styles";

const ButtonType = ({ icon, supText, text, selected, ...rest }) => {
  const Icon = icon;
  return (
    <Container selected={selected} {...rest}>
      {icon && <Icon size={30} className="button-type__icon" />}
      <Wrapper>
        <Sup>{supText}</Sup>
        <Text>{text}</Text>
      </Wrapper>
    </Container>
  );
};

ButtonType.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  supText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

export default ButtonType;
