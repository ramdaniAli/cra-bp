import { useDispatch } from "react-redux";
import {
  addNotification,
  clearNotification,
  deleteNotification,
  markAllAsRead,
  markAsRead,
} from "app/redux/reducers/notification.reducer";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { animatedSlideZoom } from "components/transitions";

export const useNotify = () => {
  const dispatch = useDispatch();

  const notify = (toastObj) => {
    const generatedID = uuidv4();

    const {
      message = "Vous venez de recevoir une nouvelle notification !",
      date = new Date(),
      type = toast.TYPE.DEFAULT,
      onClick = () => close(generatedID),
      transition = animatedSlideZoom,
      position = "top-right",
      closeOnClick = true,
      autoClose = 5000,
      hideProgressBar = false,
      pauseOnHover = true,
      draggable = true,
      theme = "light",
      pauseOnFocusLoss = true,
      icon = "🦄",
      ...props
    } = toastObj;

    dispatch(
      addNotification({
        message,
        date,
        type,
        toastId: generatedID,
        read: false,
      })
    );

    toast(message, {
      toastId: generatedID,
      position,
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

  const close = (id = undefined) => {
    if (id !== undefined) {
      toast.dismiss(id);
    } else {
      toast.dismiss();
    }
  };

  const purge = (id = undefined) => {
    if (id !== undefined) {
      dispatch(deleteNotification(id));
      toast.dismiss(id);
    } else {
      dispatch(clearNotification());
      toast.dismiss();
    }
  };

  const mark = (id = undefined) => {
    if (id !== undefined) {
      dispatch(markAsRead(id));
    } else {
      dispatch(markAllAsRead());
    }
  };

  return { notify, purge, mark, close };
};
