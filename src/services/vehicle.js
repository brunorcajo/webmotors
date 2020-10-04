import api from "./api";

export const fetchVehicles = async (page = 1) => {
  try {
    const response = await api.get("/Vehicles", {
      params: {
        Page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.log("catchError: ", error);
  }
};
