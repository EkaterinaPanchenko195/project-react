import styled from "styled-components";
import { TPostCardXlProps } from "./types";
import IconDislike from "../image/IconDislike.svg";
import IconLike from "../image/IconLike.svg";
import IconMore from "../image/IconMore.svg";
import IconSave from "../image/IconSave.svg";
import { useState } from "react";

const PostCardXl = ({ postCard }: TPostCardXlProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      {postCard.map(({ id, image, date, title, description }) => (
        <Container key={id}>
          <Div>
            <Block>
              <Date>{date}</Date>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Block>

            <Block>
              <BlockImg>
                <Avatar src={image} alt="Image - astronaut" />
              </BlockImg>
            </Block>
          </Div>
          <Div>
            <Response>
              <DivIcon>
                <ResponseImage src={IconLike} alt="IconLike" />
              </DivIcon>
              <DivIcon>
                <ResponseImage src={IconDislike} alt="IconDislike" />
              </DivIcon>
            </Response>
            <Response>
              <DivIcon>
                <ResponseImage src={IconSave} alt="IconSave" />
              </DivIcon>
              <DivIcon onClick={() => setIsMenuVisible(!isMenuVisible)}>
                <ResponseImage src={IconMore} alt="IconMore" />
              </DivIcon>
            </Response>
          </Div>
          {isMenuVisible && (
            <MenuDiv>
              <MenuButton>Edit</MenuButton>
              <MenuButton>Delete</MenuButton>
            </MenuDiv>
          )}
        </Container>
      ))}
    </>
  );
};

export default PostCardXl;

const Container = styled.article`
  border-bottom: 1px solid rgba(218, 218, 218, 1);
  width: 736px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const Block = styled.div``;
const Date = styled.div`
  color: rgba(141, 142, 151, 1);
`;
const DivIcon = styled.div`
  cursor: pointer;
`;
const BlockImg = styled.div``;
const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;
const Description = styled.p`
  color: rgba(141, 142, 151, 1);
  line-height: 28px;
`;
const Avatar = styled.img``;
const Response = styled.div`
  display: flex;
  gap: 24px;
`;
const ResponseImage = styled.img``;

const MenuDiv = styled.div`
  position: relative;
  bottom: 15px;
  left: 65%;
  width: 259px;
`;
const MenuButton = styled.button`
  cursor: pointer;
  background-color: rgb(242 242 242);
  border: none;
  font-weight: 600;
  height: 83px;
  text-align: center;
  width: 100%;
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
  &:first-child {
    margin-bottom: 2px;
  }
`;
