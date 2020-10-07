import axios from 'axios';

export async function getBatchDatas() {
  const response = await axios.get('http://localhost:5000/batchs/data');
  return response.data;
}
