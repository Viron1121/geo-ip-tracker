import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const login = (data) => api.post("/login", data);

export const getGeo = async (ip = "") => {
  const res = await axios.get(`https://ipinfo.io/${ip}/geo`);

  const { ip: ipAddr, city, region, country, loc } = res.data;

  let latitude = null;
  let longitude = null;

  if (loc) {
    [latitude, longitude] = loc.split(",").map(Number);
  }

  return { ip: ipAddr, city, region, country, latitude, longitude };
};