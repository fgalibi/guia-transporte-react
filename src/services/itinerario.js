import axios from "axios";

export const api = axios.create({
  baseURL: "http://www.poatransporte.com.br/php/facades",
});

export const find = async (id) => {
  const resp = await api.get(`process.php?a=il&p=${id}`);
  return resp.data;
};
