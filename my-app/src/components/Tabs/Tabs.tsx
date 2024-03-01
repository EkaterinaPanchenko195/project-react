import styled from "styled-components";
import { TTabsProps } from "../types/types";

const Tabs = ({ tabs }: TTabsProps) => (
  <Container>
    {tabs.map(({ id, isActive, text, isDisabled }) => (
      <StyledButton key={id} active={isActive} disabled={isDisabled}>
        {text}
      </StyledButton>
    ))}
  </Container>
);

export default Tabs;

const Container = styled.div`
  display: flex;
`;

const StyledButton = styled.button<{ active: boolean }>`
  ${({ active }) => `
    background-color: #fefefe;
    border: 1px solid #fefefe;
    border-bottom: ${active ? "2px solid" : "1px solid rgba(218, 218, 218, 1)"};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    line-height: 24px;
    width: 165px;

    &:hover {
      color: #4353b2;
    }

    &:disabled{
      color: #b5b5bc
      cursor: inherit;
      pointer-events: none;
    }
  `}
`;
