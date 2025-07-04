import { Slide, toast } from "react-toastify";

export const SuccessToast = (successMsg) => {
  console.log("successMsg", successMsg);
  toast.success(successMsg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Slide,
  });
};

export default SuccessToast;
