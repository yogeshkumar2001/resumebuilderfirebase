import { toast } from "react-toastify";
export const notify = (message, type) => {
    toast(message, {
        position: "top-right",
        autoClose: 3000,
        type: type,
    })
}