import React from "react";

export const VehicleContext = React.createContext();

const VehicleContextProvider = ({ children }) => {
  const [vehicles, setVehicles] = React.useState([]);
  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        setVehicles,
      }}
      displayName="Vehicle Context"
    >
      {children}
    </VehicleContext.Provider>
  );
};

export default VehicleContextProvider;
