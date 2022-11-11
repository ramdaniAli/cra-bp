import { styled } from "@mui/material/styles";

export const StyledLink = styled("div")`
  width: max-content;
  overflow: hidden;
  span {
    color: hsl(236, 32%, 26%);
    position: relative;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    z-index: 1;
    ::before {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 2.6px;
      border-radius: 5px;
      background-color: #3cefff;
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    :hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  }
`;
