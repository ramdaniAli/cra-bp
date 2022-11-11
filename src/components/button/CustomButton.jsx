import React from "react";
import { CustomBubbleButton } from "theme/styles/button.styles";

const CustomButton = ({ text = "click me", type = "button", ...rest }) => {
  return (
    <CustomBubbleButton type={type} {...rest}>
      {text}
    </CustomBubbleButton>
  );
};

export default CustomButton;
