import SuccessToast from "../../response/SuccessToast.jsx";
import { api } from "../axiosInstance";

export const sendEmail = async (payload) => {
  try {
    console.log("payload", payload);
    const response = await api.post("/email/sendEmail", payload);
    console.log("response", response);
    const msg = response.data.data.message;
    const data = response.data.data.payload;
    SuccessToast(msg);
    return data;
  } catch (error) {
    console.log(error);
  }
};
