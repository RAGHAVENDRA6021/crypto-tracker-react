import { instance } from "../helpers/axiosInstance";

export async function fetchCoinByMarket(currency = "usd", page = 1) {
  const perPage = 10;
  try {
    const response = await instance.get(
      `/coins/markets?vs_currency=${currency}&page=${page}&per_page=${perPage}`,
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
