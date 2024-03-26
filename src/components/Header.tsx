import styled from "styled-components";
import User from "./User";
import burger from "../image/Burger.svg";
import searchImg from "../image/IconSearch.svg";
import { useState } from "react";
import sun from "../image/IconSun.svg";
import dark from "../image/IconDark.svg";
import { Link } from "react-router-dom";

const Header = ({
  setIsTopicColor,
}: {
  setIsTopicColor: (isTopicColor: boolean) => void;
}) => {
  const [isMenuHeader, setisMenuHeader] = useState(false);
  const [search, setSearch] = useState(false);

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
            <MenuButton>
              <LinkButton to={"/home"}>Home</LinkButton>
            </MenuButton>
            <MenuButton>
              <LinkButton to={"/addPost"}>Add post</LinkButton>
            </MenuButton>
            <MenuButton>
              <LinkButton to={"/home"}>Profile</LinkButton>
            </MenuButton>
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
            <TopicButton>
              <LinkButton to={"/signIn"}>Log Out</LinkButton>
            </TopicButton>
          </BlockButton>
        </MenuDiv>
      )}
      {search && (
        <InputSearch type="search" placeholder="Search..."></InputSearch>
      )}
      <Block>
        <Search onClick={() => setSearch(!search)}>
          <SearchImg src={searchImg} alt="Search"></SearchImg>
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

const InputSearch = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  background-color: rgba(83, 96, 205, 1);
  color: rgb(255 255 255);
  border: none;
  outline: none;
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
const MenuButton = styled.div`
  height: 75px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255 255 255);
  border: 1px solid rgba(232, 232, 232, 1);
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;

const LinkButton = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
const TopicButton = styled.div`
  height: 75px;
  cursor: pointer;
  background-color: rgba(232, 232, 232, 1);
  border: 1px solid rgba(232, 232, 232, 1);
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;
