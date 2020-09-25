import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";
import { toast } from "react-toastify";

// Set an Alert
export const setAlert = (msg, desc, alertType, timeout = 5000) => (
  dispatch
) => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, desc, alertType, id },
  });

  const options = {
    autoClose: timeout,
    hideProgressBar: false,
    position: toast.POSITION.BOTTOM_LEFT,
    pauseOnHover: false,
  };

  switch (alertType) {
    case "success":
      toast.success(msg, options);
      break;

    case "info":
      toast.info(msg, options);
      break;

    case "warning":
      toast.warn(msg, options);
      break;

    case "error":
      toast.error(msg, options);
      break;

    default:
      toast.info(msg, options);
      break;
  }

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
