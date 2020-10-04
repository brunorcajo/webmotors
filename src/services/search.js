import api from "./api";

export const fetchMakes = async () => {
  try {
    const response = await api.get("/Make");
    return response.data;
  } catch (error) {
    console.log("catchError: ", error);
  }
};

export const fetchModels = async (MakeID) => {
  try {
    const response = await api.get("/Model", {
      params: {
        MakeID,
      },
    });
    return response.data;
  } catch (error) {
    console.log("catchError: ", error);
  }
};

export const fetchVersions = async (ModelID) => {
  try {
    const response = await api.get("/Version", {
      params: {
        ModelID,
      },
    });
    return response.data;
  } catch (error) {
    console.log("catchError: ", error);
  }
};
