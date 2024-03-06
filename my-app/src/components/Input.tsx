import styled from "styled-components";
import { TInputProps } from "./types";
import { useState } from "react";

const Input = ({
  placeholder,
  labelName,
  isDisabled,
  hasError,
}: TInputProps) => {
  const [error, setError] = useState("");

  return (
    <StyledContainer>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledInput
        hasError={error.length > 10}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={(e) => setError(e.target.value)}
      />
    </StyledContainer>
  );
};

export default Input;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
`;
const StyledInput = styled.input<{ hasError: boolean }>`
  ${({ hasError, ...rest }) => `
    border: none;
    border-radius: 2px;
    height: 56px;
    width: 544px;

    &:focus {
      outline: ${
        hasError
          ? "2px solid rgba(253, 52, 25, 1)"
          : "2px solid rgba(218, 218, 218, 1)"
      };
    }
  
    &:disabled {
      background-color: rgba(232, 232, 232, 1);
    }
    `}
`;
