import styled from "styled-components";
import { TBlockForSendingDataProps } from "./types";

const BlockForSendingData = ({
  buttonSignName,
  buttonbackName,
  description,
}: TBlockForSendingDataProps) => {
  return (
    <>
      <Container>
        <ButtonSign>{buttonSignName}</ButtonSign>
        <Block>
          <Description>{description}</Description>
          <Buttonback>{buttonbackName}</Buttonback>
        </Block>
      </Container>
    </>
  );
};

export default BlockForSendingData;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;
const ButtonSign = styled.button`
  background-color: rgba(34, 49, 170, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 18px;
  height: 56px;
  width: 564px;
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
