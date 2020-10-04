import React from "react";
import PropTypes from "prop-types";

import { formatCurrency } from "../../utils/string";

import { Container, Photo, Content, Name, Version, Price, Year, Footer } from "./styles";

const Vehicle = ({ data }) => {
  const { Image, Make, Model, Version: description, Price: PriceVehicle, YearFab, YearModel } = data;

  return (
    <Container>
      <Photo bg={Image} />
      <Content>
        <Name>{`${Make} ${Model}`}</Name>
        <Version>{description}</Version>
        <Footer>
          <Price>{formatCurrency(PriceVehicle.replace(",00", ""))}</Price>
          <Year>{`${YearFab}-${YearModel}`}</Year>
        </Footer>
      </Content>
    </Container>
  );
};

Vehicle.propTypes = {
  data: PropTypes.shape({
    ID: PropTypes.number.isRequired,
    Make: PropTypes.string.isRequired,
    Model: PropTypes.string.isRequired,
    KM: PropTypes.number.isRequired,
    Color: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Version: PropTypes.string.isRequired,
    YearFab: PropTypes.number.isRequired,
    YearModel: PropTypes.number.isRequired,
  }),
};

export default Vehicle;
