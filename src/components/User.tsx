import styled from "styled-components";
import { TUserProps } from "./types";

const User = ({ userName }: TUserProps) => {
  const initials = userName
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <StyledContainer>
      <Initials>{initials}</Initials>
      <UserName>{userName}</UserName>
    </StyledContainer>
  );
};

export default User;

const StyledContainer = styled.div`
  align-items: center;
  background-color: rgba(34, 49, 170, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 200px;
`;

const Initials = styled.h2`
  align-items: center;
  background: rgba(83, 96, 205, 1);
  color: #ffff;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  height: 48px;
  margin-right: 10px;
  text-align: center;
  width: 48px;
`;

const UserName = styled.h2`
  color: #ffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
