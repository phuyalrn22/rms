import api from "../utils/interceptor";

export const getSeat = async () => {
  return api.get("/seat");
};

export const getOrder = async (deskId) => {
  return api.get(`/order/${deskId}`);
};
