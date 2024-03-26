import styled from "styled-components";
import { TBlockForSendingDataProps } from "./types";
import { Link } from "react-router-dom";

const BlockForSendingData = ({
  buttonbackName,
  description,
}: TBlockForSendingDataProps) => {
  return (
    <Block>
      <Description>{description}</Description>
      <Buttonback>
        <LinkButton to={buttonbackName === "Sign Up" ? "/signUp" : "/signIn"}>
          {buttonbackName}
        </LinkButton>
      </Buttonback>
    </Block>
  );
};

export default BlockForSendingData;

const LinkButton = styled(Link)`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;
const Buttonback = styled.button`
  border: none;
  color: rgba(34, 49, 170, 1);
  font-weight: 500;
  cursor: pointer;

  background-color: transparent;
`;
const Description = styled.p`
  color: rgba(141, 142, 151, 1);
  font-weight: 500;
`;
const Block = styled.div`
  display: flex;
  justify-content: center;
`;
