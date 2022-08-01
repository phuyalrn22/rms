import api from "../utils/interceptor";

export const getSeat = async () => {
  return api.get("/seat");
};

export const getOrder = async (deskId) => {
  return api.get(`/order/${deskId}`);
};

export const addOrder = async (seatId, productId, quantity) =>
  api.post(`/order/${seatId}`, { productId, quantity });

export const checkOutOrder = async (seatId) => api.patch(`/order/${seatId}`);
