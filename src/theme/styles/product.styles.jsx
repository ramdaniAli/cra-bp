import { styled } from "@mui/material/styles";

export const CustomProductCard = styled("div")`
  min-height: 300px;
  border-radius: 10px;
  padding: 1.5rem;
  background: transparent;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: 0.6s ease-out;
  }

  div {
    position: relative;
    z-index: 2;
    color: white;
    opacity: 0;
    transform: translateY(40px);
    transition: 0.5s ease-in-out;
    h1 {
      margin: 0px;
      text-transform: capitalize;
    }
    p {
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 8px;
    }
    button {
      margin-top: 10px;
      margin-right: 10px;
      padding: 0.6rem;
      outline: none;
      border: none;
      border-radius: 3px;
      background: white;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease;
      :hover {
        background: #1e90ff;
        color: white;
      }
    }
  }

  :hover {
    img {
      transform: scale(1.5);
      filter: brightness(50%);
    }
    div {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
