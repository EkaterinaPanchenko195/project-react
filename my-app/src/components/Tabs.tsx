import styled from "styled-components";
import { TTabsProps } from "./types";

const Tabs = ({ tabs, isTopicColor }: TTabsProps) => (
  <Container>
    {tabs.map(({ id, isActive, text, isDisabled }) => (
      <StyledButton
        $istopiccolor={isTopicColor}
        key={id}
        $isactive={isActive}
        disabled={isDisabled}
      >
        {text}
      </StyledButton>
    ))}
  </Container>
);

export default Tabs;

const Container = styled.div`
  display: flex;
`;

const StyledButton = styled.button<{
  $isactive: boolean;
  $istopiccolor: boolean;
}>`
  ${({ $isactive, $istopiccolor }) => `
    background-color:${$istopiccolor ? "transparent" : "rgba(49, 48, 55, 1)"};
    color:${$istopiccolor ? "rgba(49, 48, 55, 1)" : "rgba(255, 255, 255, 1)"};
    border:none;
    border-bottom: 1px solid rgba(218, 218, 218, 1);
    border-bottom: ${
      $isactive ? "2px solid" : "1px solid rgba(218, 218, 218, 1)"
    };
    cursor: pointer;
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
