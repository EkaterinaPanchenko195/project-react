import styled from "styled-components";
import Tabs from "./Tabs";
import Title from "./Title";
import { TMenuProps } from "./types";

const defaultTabs = [
  {
    id: 0,
    isActive: true,
    text: "All",
    isDisabled: false,
  },
  {
    id: 1,
    isActive: false,
    text: "My favorites",
    isDisabled: false,
  },
  {
    id: 2,
    isActive: false,
    text: "Popular",
    isDisabled: true,
  },
];

const Menu = ({ text, isTopicColor }: TMenuProps) => {
  return (
    <Container>
      <Title text={text}></Title>
      <Tabs isTopicColor={isTopicColor} tabs={defaultTabs} />
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  margin-bottom: 64px;
`;
