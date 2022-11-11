import { Button } from "@mui/material";
import { useNotify } from "app/redux/hooks/notification.hooks";
import React from "react";
import { toast } from "react-toastify";

//!
/**
 * @message
 * @type
 * @autoClose
 * @hideProgressBar
 * @pauseOnHover
 * @draggable
 * @icon  ({theme, type}) =>
 * @closeOnClick
 * @onClick
 * @props check toastify documentation
 */
const NotificationTestButton = ({
  type = toast.TYPE.ERROR,
  message = "notification debug success !",
}) => {
  const { notify } = useNotify();
  return (
    <Button
      variant="outlined"
      color="inherit"
      onClick={() =>
        notify({
          message,
          type,
          icon: "⚛️",
        })
      }
    >
      notify
    </Button>
  );
};

export default NotificationTestButton;
