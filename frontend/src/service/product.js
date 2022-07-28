import api from "../utils/interceptor";

export const getProduct = async () => {
  return api.get("/product");
};

export const postProduct = async (data) => {
  return api.post("/product", data);
};
