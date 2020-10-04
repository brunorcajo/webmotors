import React from "react";
import PropTypes from "prop-types";

import Theme from "../../style/Theme";
import GlobalStyle from "../../style/GlobalStyle";

import { Grid, Row, Col } from "../../shared/components/Grid";
import { ReactComponent as BrandHeader } from "../../assets/images/webmotors.svg";

import { Container, Header } from "./styles";

const MasterPage = ({ children }) => {
  return (
    <Theme>
      <GlobalStyle />
      <Container>
        <Grid>
          <Row>
            <Col>
              <Header>
                <BrandHeader />
              </Header>
              <main>{children}</main>
            </Col>
          </Row>
        </Grid>
      </Container>
    </Theme>
  );
};

MasterPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MasterPage;
