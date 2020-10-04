import React, { useEffect, useState, useContext } from "react";

import { fetchMakes, fetchModels, fetchVersions } from "../../../services/search";
import { SearchContext, TYPES } from "../../../store/context/search";

import { years, prices, radius as radiusData } from "../../../data/db";

import InputText from "../../../shared/components/InputText";
import { Row, Col } from "../../../shared/components/Grid";
import Dropdown from "../Dropdown";
import Button from "../../../shared/components/Button";
import ButtonType from "../../../shared/components/ButtonType";
import Checkbox from "../../../shared/components/Checkbox";

import { FaCarSide, FaMotorcycle } from "react-icons/fa";
import { IoIosPin } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Container, ButtonList, Header, Content, WrapperCheckbox } from "./styles";

const SearchBox = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);
  const { dispatch, make, model, version, year, price, radius, type, status, location } = useContext(SearchContext);

  const isCar = type === "car";

  const handleChange = (type) => (value) => {
    dispatch({
      type,
      payload: value,
    });
  };

  const handleChangeType = (value) => {
    dispatch({
      type: TYPES.CHANGE_TYPE,
      payload: value,
    });
  };

  const cleanupForm = () => {
    dispatch({
      type: TYPES.CLEANUP_FORM,
    });
  };

  const handleChangeStatus = (value) => {
    const hasStatus = status.includes(value);
    const state = hasStatus ? status.filter((item) => item !== value) : [...status, value];
    dispatch({
      type: TYPES.CHANGE_STATUS,
      payload: state,
    });
  };

  useEffect(() => {
    fetchMakes().then((data) => {
      data.unshift({
        ID: -1,
        Name: "Todos",
      });
      setMakes(data);
    });
  }, []);

  useEffect(() => {
    if (make === -1) {
      setModels([]);
      return;
    }

    fetchModels(make).then((data) => {
      data.unshift({
        ID: -1,
        Name: "Todos",
      });
      setModels(data);
    });
  }, [make]);

  useEffect(() => {
    if (model === -1) {
      setVersions([]);
      return;
    }

    fetchVersions(model).then((data) => {
      data.unshift({
        ID: -1,
        Name: "Todas",
      });
      setVersions(data);
    });
  }, [model]);

  return (
    <Container>
      <Row noMargin>
        <Col>
          <Header>
            <Row noMargin>
              <Col className="types">
                <ButtonList>
                  <ButtonType
                    onClick={() => {
                      handleChangeType("car");
                    }}
                    selected={isCar}
                    icon={FaCarSide}
                    supText="comprar"
                    text="carros"
                  />
                  <ButtonType
                    onClick={() => {
                      handleChangeType("motocycle");
                    }}
                    selected={!isCar}
                    icon={FaMotorcycle}
                    supText="comprar"
                    text="motos"
                  />
                </ButtonList>
              </Col>
              <Col justifyContent="flex-end" display="flex">
                <Button variant="warning" className="warning--outline">
                  Vender meu carro
                </Button>
              </Col>
            </Row>
          </Header>
        </Col>
      </Row>

      <Row noMargin>
        <Col>
          <Content>
            <Row>
              <Col>
                <WrapperCheckbox>
                  <Checkbox label="Novos" checked={status.includes("new")} onChange={handleChangeStatus} value="new" />
                  <Checkbox label="Usados" checked={status.includes("used")} onChange={handleChangeStatus} value="used" />
                </WrapperCheckbox>
              </Col>
            </Row>
            <Row>
              <Col display="flex">
                <InputText onChange={handleChange(TYPES.CHANGE_LOCATION)} icon={<IoIosPin />} labelBefore="Onde:" className="search-box__input--location" data={location} />
                <Dropdown onChange={handleChange(TYPES.CHANGE_RADIUS)} data={radiusData} labelBeforeSelectedItem="Raio:" value={radius} className="search-box__dropdown--radius" />
              </Col>
              <Col>
                <Row noMargin>
                  <Col>
                    <Dropdown onChange={handleChange(TYPES.CHANGE_MAKE)} data={makes} labelBeforeSelectedItem="Marca:" value={make} emptyLabel="Todos" dataValue="ID" dataLabel="Name" />
                  </Col>
                  <Col className="model">
                    <Dropdown onChange={handleChange(TYPES.CHANGE_MODEL)} data={models} labelBeforeSelectedItem="Modelo:" emptyLabel="Todos" value={model} dataValue="ID" dataLabel="Name" />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row noMargin>
                  <Col>
                    <Dropdown onChange={handleChange(TYPES.CHANGE_YEAR)} data={years} labelBeforeSelectedItem="Ano Desejado" value={year} removeLabelAfterSelectedItem />
                  </Col>
                  <Col>
                    <Dropdown onChange={handleChange(TYPES.CHANGE_PRICE)} data={prices} labelBeforeSelectedItem="Faixa de Preço" value={price} removeLabelAfterSelectedItem />
                  </Col>
                </Row>
              </Col>
              <Col className="version">
                <Dropdown onChange={handleChange(TYPES.CHANGE_VERSION)} data={versions} labelBeforeSelectedItem="Versão:" emptyLabel="Todas" value={version} dataValue="ID" dataLabel="Name" />
              </Col>
            </Row>
            <Row>
              <Col display="flex">
                <Button variant="link" icon={<MdKeyboardArrowRight />} strong>
                  Busca Avançada
                </Button>
              </Col>
              <Col justifyContent="flex-end" display="flex">
                <ButtonList>
                  <Button variant="link" className="reset-button" onClick={cleanupForm}>
                    Limpar filtros
                  </Button>
                  <Button variant="danger" strong className="submit-button">
                    VER OFERTAS
                  </Button>
                </ButtonList>
              </Col>
            </Row>
          </Content>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBox;
