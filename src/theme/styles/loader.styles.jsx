import { styled } from "@mui/material/styles";

export const SpinnerLoader = styled("div")`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 2.5em;
    height: 3em;
    border: 3px solid transparent;
    border-top-color: #3cefff;
    border-bottom-color: #3cefff;
    border-radius: 50%;
    animation: spin-stretch 2s ease infinite;
    @keyframes spin-stretch {
      50% {
        transform: rotate(360deg) scale(0.4, 0.33);
        border-width: 8px;
      }
      100% {
        transform: rotate(720deg) scale(1, 1);
        border-width: 3px;
      }
    }
  }
`;
