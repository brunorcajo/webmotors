import React, { useState, useEffect } from "react";

import SearchContextProvider from "../../store/context/search";
import VehicleContextProvider from "../../store/context/vehicle";

import { fetchVehicles } from "../../services/vehicle";

import MasterPage from "../MasterPage";
import SearchBox from "../../shared/components/SearchBox";
import Vehicles from "../../shared/components/Vehicles";

import { Container } from "./styles";

const App = () => {
  const [vehicles, setVehicles] = useState([]);

  const filter = () => {
    // todo: context search data stored
    // todo: useMemo for return values

    return vehicles;
  };

  useEffect(() => {
    fetchVehicles().then((data) => {
      setVehicles(data);
    });
  }, []);

  return (
    <MasterPage>
      <Container>
        <SearchContextProvider>
          <SearchBox />
        </SearchContextProvider>
        <VehicleContextProvider>
          <Vehicles data={filter()} />
        </VehicleContextProvider>
      </Container>
    </MasterPage>
  );
};

export default App;
