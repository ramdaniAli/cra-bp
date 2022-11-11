import { Slide } from "@mui/material";
import { cssTransition } from "react-toastify";
// import 'animate.css';
import "animate.css/animate.min.css";

export const SlideTransistion = (props) => {
  return <Slide {...props} direction="down" />;
};

export const animatedSlide = cssTransition({
  enter: "animate__animated animate__backInDown",
  exit: "animate__animated animate__backOutUp",
});

export const animatedSlideZoom = cssTransition({
  enter: "animate__animated animate__slideInRight",
  exit: "animate__animated animate__zoomOutRight",
});
