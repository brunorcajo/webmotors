import React from "react";
import PropTypes from "prop-types";

import { Container, Icon } from "./styles";

const Button = ({ children, onClick, icon, ...rest }) => {
  return (
    <Container onClick={onClick} icon={icon} {...rest}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
