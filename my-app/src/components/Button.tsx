import { TButtonProps } from "./types";
import styled from "styled-components";

const Button = ({
  text,
  isDisabled,
  onClick,
  buttonType,
  ...rest
}: TButtonProps) => (
  <StyledButton
    {...rest}
    $buttontype={buttonType}
    disabled={isDisabled}
    onClick={onClick}
  >
    {text}
  </StyledButton>
);

export default Button;

const getButtonStyles = ($buttontype: string) => {
  const defaultStyles = {
    backgroundColor: "rgba(34, 49, 170, 1)",
    color: "#fff",
    border: "1px solid transparent",
    hoverBackgroundColor: "#5463cb",
    hoverBorder: "1px solid transparent",
    disabledBackgroundColor: "#e8e8e8",
    disabledColor: "#8e8f98",
  };

  switch ($buttontype) {
    case "secondary":
      return {
        ...defaultStyles,
        backgroundColor: "#e8e8e8",
        color: "#33323a",
        hoverBackgroundColor: "#dadada",
      };
    case "critical":
      return {
        ...defaultStyles,
        backgroundColor: "#fff",
        color: "#fa493b",
        hoverBackgroundColor: "#fff",
        hoverBorder: "1px solid #dadada",
        disabledBackgroundColor: "#fff",
        disabledColor: "#93949d",
      };

    default:
      return defaultStyles;
  }
};

const StyledButton = styled.button<{ $buttontype: string }>`
  ${({ $buttontype}) => {
    const {
      backgroundColor,
      color,
      border,
      hoverBackgroundColor,
      hoverBorder,
      disabledBackgroundColor,
      disabledColor,
    } = getButtonStyles($buttontype);

    return `
        background-color: ${backgroundColor};
        border: ${border};
        color: ${color};
        cursor: pointer;
        display: flex;
        justify-content: center;
        padding: 16px 32px;
        width: 143px;
        font-size: 16px;
        font-weight: 600;

        &:hover {
          background-color: ${hoverBackgroundColor};
          border: ${hoverBorder};
        }

        &:disabled {
          background-color: ${disabledBackgroundColor};
          color: ${disabledColor};
          cursor: initial;
          pointer-events: none;
        }
    `;
  }}
`;
