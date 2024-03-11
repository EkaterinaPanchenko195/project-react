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
`;

const StyledLabel = styled.label`
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
`;

const StyledTextarea = styled.textarea`
  resize: none;
  width: 688px;
  height: 245px;
  padding-top: 18px;
  padding-left: 20px
`;
