import axios from "axios";

export async function getProducts() {
  const response = await axios.get("/products");
  return response.data;
}

export async function postProduct(data) {
  console.log("postProduct ", data);
  return {
    id: data.id,
  };
}

export async function patchProduct(data) {
  console.log("patchProduct ", data);
  return {
    id: data.id,
  };
}
