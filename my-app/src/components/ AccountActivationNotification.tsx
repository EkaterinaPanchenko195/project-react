import styled from "styled-components";
import { TAccountActivationNotification } from "./types";

const AccountActivationNotification = ({
  description,
  email,
  descriptionEmail,
  button,
}: TAccountActivationNotification) => {
  return (
    <Conntainer>
      <Description>{description}</Description>
      <Span>{email}</Span>
      <Description> {descriptionEmail}</Description>
      <Button>{button}</Button>
    </Conntainer>
  );
};

export default AccountActivationNotification;

const Conntainer = styled.div`
  border: 1px solid rgba(218, 218, 218, 1);
  box-sizing: border-box;
  padding: 40px;
  width: 624px;
`;
const Description = styled.p``;
const Span = styled.span`
  font-weight: 700;
`;
const Button = styled.button`
  background-color: rgba(34, 49, 170, 1);
  border: none;
  color: rgba(255, 255, 255);
  cursor: pointer;
  height: 56px;
  width: 100%;
`;
