import styled from "styled-components";
import { TTextareaProps } from "./types";

const Textarea = ({ labelName, placeholder }: TTextareaProps) => {
  return (
    <StyledContainer>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledTextarea placeholder={placeholder}></StyledTextarea>
    </StyledContainer>
  );
};

export default Textarea;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
`;

const StyledTextarea = styled.textarea`
    border: none;
  resize: none;
  width: 544px;
  height: 245px;
  padding-top: 18px;
  padding-left: 20px
`;
