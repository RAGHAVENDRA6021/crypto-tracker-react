import axios from "axios";
import { COIN_GECKO_URL } from "./constants";

export const instance = axios.create({
  baseURL: COIN_GECKO_URL,
  headers: {
    x_cg_demo_api_key: "CG-avryBz1gQc5Q2Q4i4hRYz7f3",
  },
});
