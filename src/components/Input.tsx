import styled from "styled-components";
import { TInputProps } from "./types";
import { useState } from "react";

const Input = ({
  value,
  placeholder,
  labelName,
  isDisabled,
  type,
  onChange,
}: TInputProps) => {
  const [error, setError] = useState("");

  return (
    <StyledContainer>
      <StyledLabel>{labelName}</StyledLabel>
      <StyledInput
        value={value}
        $haserror={error.length > 30}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={(e) => {
          onChange?.(e);
          setError(e.target.value);
        }}
        type={type}
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
const StyledInput = styled.input<{ $haserror: boolean; type: string }>`
  ${({ $haserror, type }) => `
    border: none;
    border-radius: 2px;
    height: 56px;
    margin-bottom: 40px;
    padding:${type === "image" ? "0" : "0 10px"};
    width:${type === "image" ? "564px" : "544px"}; 
    background-color: #ffff;

    &:focus {
      outline: ${
        $haserror
          ? "2px solid rgba(253, 52, 25, 1)"
          : "2px solid rgba(218, 218, 218, 1)"
      };
    }
  
    &:disabled {
      background-color: rgba(232, 232, 232, 1);
    }
    `}
`;
