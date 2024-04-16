import styled from "styled-components";
import { TBlockForSendingDataProps } from "./types";
import { Link } from "react-router-dom";

const ButtonSign = ({ buttonSignName, onClick }: TBlockForSendingDataProps) => {
  return (
    <Button onClick={(e) => onClick?.(e)}>
      {/* <LinkButton
        to={buttonSignName === "Sign In" ? "/home" : "/successfulConfirmation"}
      >
    </LinkButton> */}
    {buttonSignName}
    </Button>
  );
};

export default ButtonSign;
const Button = styled.div`
  background-color: rgba(34, 49, 170, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 18px;
  height: 56px;
  width: 564px;
color: rgba(255, 255, 255, 1);
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
`;