import React from "react";
import { StyledLink } from "theme/styles/link.styles";
import { useNavigate } from "react-router-dom";

const CustomLink = ({ text = "click me", url }) => {
  const navigate = useNavigate();
  return (
    <StyledLink>
      <span onClick={() => navigate(url)}>{text}</span>
    </StyledLink>
  );
};

export default CustomLink;
