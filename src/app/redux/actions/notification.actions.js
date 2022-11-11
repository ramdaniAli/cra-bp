import {
  addNotification,
  clearNotification,
  deleteNotification,
  markAllAsRead,
  markAsRead,
} from "app/redux/reducers/notification.reducer";
import { animatedSlide } from "components/transitions";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const notify = (toastObj) => (dispatch) => {
  const {
    message = "Vous venez de recevoir une nouvelle notification !",
    date = new Date(),
    type = toast.TYPE.DEFAULT,
    onClick = () => close(generatedID),
    transition = animatedSlide,
    closeOnClick = true,
    theme,
    autoClose,
    draggable,
    pauseOnFocusLoss,
    hideProgressBar,
    pauseOnHover,
    icon, //  ({theme, type}) =>
    ...props
  } = toastObj;

  const generatedID = uuidv4();

  dispatch(
    addNotification({
      message,
      type,
      date,
      toastId: generatedID,
      read: false,
    })
  );
  toast(message, {
    toastId: generatedID,
    type,
    theme,
    transition,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    pauseOnFocusLoss,
    draggable,
    onClick,
    icon,
    ...props,
  });
};

export const close = (id = undefined) => {
  if (id !== undefined) {
    toast.dismiss(id);
  } else {
    toast.dismiss();
  }
};

export const purge =
  (id = undefined) =>
  (dispatch) => {
    if (id !== undefined) {
      dispatch(deleteNotification(id));
      toast.dismiss(id);
    } else {
      dispatch(clearNotification());
      toast.dismiss();
    }
  };

export const mark =
  (id = undefined) =>
  (dispatch) => {
    if (id !== undefined) {
      dispatch(markAsRead(id));
    } else {
      dispatch(markAllAsRead());
    }
  };
