import axios from "axios";

export async function getFoods() {
  const response = await axios.get("/foods");
  return response.data;
}
