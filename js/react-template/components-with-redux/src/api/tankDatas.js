import axios from "axios";

export async function getTankDatas() {
  const response = await axios.get("/tankDatas");
  return response.data;
}
