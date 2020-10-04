import React, { useReducer } from "react";

export const TYPES = {
  CHANGE_MAKE: "search/CHANGE_MAKE",
  CHANGE_MODEL: "search/CHANGE_MODEL",
  CHANGE_VERSION: "search/CHANGE_VERSION",
  CHANGE_YEAR: "search/CHANGE_YEAR",
  CHANGE_RADIUS: "search/CHANGE_RADIUS",
  CHANGE_PRICE: "search/CHANGE_PRICE",
  CHANGE_TYPE: "search/CHANGE_TYPE",
  CHANGE_STATUS: "search/CHANGE_STATUS",
  CLEANUP_FORM: "search/CLEANUP_FORM",
};

const initialState = {
  type: "car",
  status: ["new", "used"],
  location: "",
  make: -1,
  model: -1,
  version: -1,
  year: -1,
  radius: 100,
  price: -1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.CHANGE_MAKE:
      return {
        ...state,
        make: action.payload,
        model: -1,
        version: -1,
      };

    case TYPES.CHANGE_MODEL:
      return {
        ...state,
        version: -1,
        model: action.payload,
      };

    case TYPES.CHANGE_VERSION:
      return {
        ...state,
        version: action.payload,
      };

    case TYPES.CHANGE_YEAR:
      return {
        ...state,
        year: action.payload,
      };

    case TYPES.CHANGE_PRICE:
      return {
        ...state,
        price: action.payload,
      };

    case TYPES.CHANGE_RADIUS:
      return {
        ...state,
        radius: action.payload,
      };

    case TYPES.CHANGE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };

    case TYPES.CHANGE_TYPE:
      return {
        ...initialState,
        type: action.payload,
      };

    case TYPES.CHANGE_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case TYPES.CLEANUP_FORM:
      return {
        ...initialState,
        type: state.type,
      };

    default:
      throw new Error(`Error: ${action.type}`);
  }
};

export const SearchContext = React.createContext();

const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { type, status, make, model, version, year, price, radius, location } = state;

  return (
    <SearchContext.Provider
      value={{
        dispatch,
        type,
        status,
        location,
        make,
        model,
        version,
        year,
        price,
        radius,
      }}
      displayName="Search Context"
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
