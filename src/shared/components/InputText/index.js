import React, { useRef } from "react";
import PropTypes from "prop-types";

import { AiFillCloseCircle } from "react-icons/ai";

import { Container, Input, LabelBefore, Cleanup, Icon } from "./styles";

const InputText = ({ icon, data, labelBefore, onChange, ...rest }) => {
  const inputRef = useRef(null);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleClickCleanup = () => {
    onChange("");
    inputRef.current.focus();
  };

  return (
    <Container {...rest}>
      {icon && <Icon>{icon}</Icon>}
      {labelBefore && <LabelBefore>{labelBefore}</LabelBefore>}
      <Input ref={inputRef} value={data} onChange={handleChange}></Input>
      {data && (
        <Cleanup onClick={handleClickCleanup}>
          <AiFillCloseCircle />
        </Cleanup>
      )}
    </Container>
  );
};

InputText.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  data: PropTypes.string.isRequired,
  labelBefore: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputText;
