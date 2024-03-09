import styled from "styled-components";
import User from "./User";
import burger from "../image/Burger.svg";
import search from "../image/IconSearch.svg";
import { useState } from "react";
import sun from "../image/IconSun.svg";
import dark from "../image/IconDark.svg";

const Header = ({
  setIsTopicColor,
}: {
  setIsTopicColor: (isTopicColor: boolean) => void;
}) => {
  const [isMenuHeader, setisMenuHeader] = useState(false);

  return (
    <Container>
      <Menu>
        <MenuImg
          onClick={() => setisMenuHeader(!isMenuHeader)}
          src={burger}
          alt="Menu"
        ></MenuImg>
      </Menu>
      {isMenuHeader && (
        <MenuDiv>
          <BlockButton>
            <User userName="Artem Malkin" />
            <MenuButton>Home</MenuButton>
            <MenuButton>Add post</MenuButton>
            <MenuButton>Profile</MenuButton>
          </BlockButton>
          <BlockButton>
            <Topics>
              <Topic onClick={() => setIsTopicColor(true)}>
                <TopicImg src={sun} alt="sun topic" />
              </Topic>
              <Topic onClick={() => setIsTopicColor(false)}>
                <TopicImg src={dark} alt="dark topic" />
              </Topic>
            </Topics>
            <TopicButton>Log Out</TopicButton>
          </BlockButton>
        </MenuDiv>
      )}
      <Block>
        <Search>
          <SearchImg src={search} alt="Search"></SearchImg>
        </Search>
        <User userName="Artem Malkin" />
      </Block>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: relative;
  align-items: center;
  background-color: rgba(34, 49, 170, 1);
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
`;
const Menu = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 44px;
`;
const MenuImg = styled.img`
  height: 24px;
  width: 24px;
`;
const Search = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 44px;
  width: 44px;
`;
const SearchImg = styled.img`
  height: 24px;
  width: 24px;
`;
const Block = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const MenuDiv = styled.menu`
  position: absolute;
  top: 58px;
  left: 0;
  z-index: 2;
  width: 200px;
  background-color: rgb(255 255 255);
  padding: 0;
`;
const BlockButton = styled.div`
  width: 100%;
`;
const MenuButton = styled.button`
  height: 75px;
  width: 100%;
  cursor: pointer;
  background-color: rgb(255 255 255);
  border: 1px solid rgba(232, 232, 232, 1);
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;
const Topics = styled.div`
  display: flex;
  width: 100%;
`;
const Topic = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;
  height: 75px;
  cursor: pointer;
  &:first-child {
    border-right: 1px solid rgba(232, 232, 232, 1);
  }
  &:hover {
    background-color: rgba(34, 49, 170, 1);
  }
`;
const TopicImg = styled.img``;
const TopicButton = styled.button`
  height: 75px;
  width: 100%;
  cursor: pointer;
  background-color: rgba(232, 232, 232, 1);
  border: 1px solid rgba(232, 232, 232, 1);
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;
