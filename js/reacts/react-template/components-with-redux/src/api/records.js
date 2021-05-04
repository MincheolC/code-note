import axios from "axios";

export async function getRecords() {
  const response = await axios.get("/records");
  return response.data;
}
