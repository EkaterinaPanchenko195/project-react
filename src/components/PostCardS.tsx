import styled from "styled-components";
import { TPostCardXlProps } from "./types";
import IconDislike from "../image/IconDislike.png";
import IconLike from "../image/IconLike.png";
import IconMore from "../image/IconMore.png";
import IconSave from "../image/IconSave.png";
import { useState } from "react";

const PostCardS = ({ postCard, isTopicColor }: TPostCardXlProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { id, image, date, title } = postCard;
  return (
    <Container key={id}>
      <Div>
        <Block>
          <Date>{date}</Date>
          <Title>{title}</Title>
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
            <ResponseImage
              $istopiccolor={isTopicColor}
              src={IconLike}
              alt="IconLike"
            />
          </DivIcon>
          <DivIcon>
            <ResponseImage
              $istopiccolor={isTopicColor}
              src={IconDislike}
              alt="IconDislike"
            />
          </DivIcon>
        </Response>
        <Response>
          <DivIcon>
            <ResponseImage
              $istopiccolor={isTopicColor}
              src={IconSave}
              alt="IconSave"
            />
          </DivIcon>
          <DivIcon onClick={() => setIsMenuVisible(!isMenuVisible)}>
            <ResponseImage
              $istopiccolor={isTopicColor}
              src={IconMore}
              alt="IconMore"
            />
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
  );
};

export default PostCardS;

const Container = styled.article`
  aspect-ratio: 352 / 206;
  border-bottom: 1px solid rgba(218, 218, 218, 1);
  width: 100%;
  position: relative;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 33px;
`;
const Block = styled.div``;
const Date = styled.div`
  color: rgba(141, 142, 151, 1);
`;
const DivIcon = styled.div`
  cursor: pointer;
`;
const BlockImg = styled.div`
  width: 96px;
  height: 96px;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;
const Description = styled.p`
  color: rgba(141, 142, 151, 1);
  line-height: 28px;
`;
const Avatar = styled.img`
  width: 96px;
  height: 96px;
`;
const Response = styled.div`
  display: flex;
  gap: 24px;
`;
const ResponseImage = styled.img<{ $istopiccolor: boolean }>`
  ${({ $istopiccolor }) => `
     filter:${$istopiccolor ? "invert(1)" : "nvert(0)"};
`}
`;

const MenuDiv = styled.div`
  position: absolute;
  bottom: -140px;
  right: 0;
  width: 259px;
  z-index: 2;
`;
const MenuButton = styled.button`
  cursor: pointer;
  background-color: rgb(255 255 255);
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
