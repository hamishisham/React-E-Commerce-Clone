import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const products = await axios
  .get(BASE_URL)
  .then((res) => res.data)
  .catch((err) => console.error(err));

export default BASE_URL;
