import { api } from "../axiosInstance";

export const Signup = async (paylod) => {
  try {
    const response = await api.post("/user/signup", paylod);
    alert(response.data.data.message);
    console.log("response", response);
    console.log("response.data.message", response.data.data.message);
    const data = response.data.data.payload;
    return data;
  } catch (error) {
    const errorMsg = error.response.data.message;
    alert(errorMsg);
    console.log(error);
  }
};

export const Login = async (paylod) => {
  try {
    const response = await api.post("/user/login", paylod);
    console.log("response", response);
    alert(response.data.data.message);
    const data = response.data.data;
    return data;
  } catch (error) {
    const errorMsg = error.response.data.message;
    alert(errorMsg);
    console.log(error);
  }
};
