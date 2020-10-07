import React from "react";
import PropTypes from "prop-types";

import { Container, Icon } from "./styles";

const Button = ({ children, onClick, icon, ...rest }) => {
  React.useEffect(() => {
    console.log("render button");
  });

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

//Button.whyDidYouRender = true;

export default React.memo(Button);
