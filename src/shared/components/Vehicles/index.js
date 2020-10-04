import React from "react";
import PropTypes from "prop-types";

import Vehicle from "../Vehicle";
import { Col, Row } from "../Grid";

import { Container } from "./styles";

const Vehicles = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col>{data && data.map((item) => <Vehicle key={item.ID} data={item} />)}</Col>
      </Row>
    </Container>
  );
};

Vehicles.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      Color: PropTypes.string.isRequired,
      ID: PropTypes.number.isRequired,
      Image: PropTypes.string.isRequired,
      KM: PropTypes.number.isRequired,
      Make: PropTypes.string.isRequired,
      Model: PropTypes.string.isRequired,
      Price: PropTypes.string.isRequired,
      Version: PropTypes.string.isRequired,
      YearFab: PropTypes.number.isRequired,
      YearModel: PropTypes.number.isRequired,
    })
  ),
};

export default Vehicles;
