import axios from "axios";

export const api = axios.create({
  baseURL:
    "http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=o",
});

export const getList = async () => {
  const resp = await api.get();
  return resp.data;
};
