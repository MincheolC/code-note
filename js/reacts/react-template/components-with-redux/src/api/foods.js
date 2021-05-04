import axios from "axios";

export async function getFoods() {
  const response = await axios.get("/foods");
  return response.data;
}

export async function patchFood(data) {
  console.log("patchFood ", data);
  return {
    id: data.id,
  };
}

export async function deleteFood(id) {
  console.log("deleteFood ", id);
  return {
    id,
  };
}
