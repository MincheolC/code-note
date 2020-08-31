import axios from "axios";

export async function getUsers() {
  const response = await axios.get("/users");
  return response.data;
}

export async function patchUser(data) {
  console.log("patchUser ", data);
  return {
    id: data.id,
  };
}

export async function deleteUser(id) {
  console.log("deleteUser ", id);
  return {
    id,
  };
}

export async function createUser(data) {
  console.log("createUser ", data);
  return {
    id: data.id,
  };
}
