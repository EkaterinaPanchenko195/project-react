import styled from "styled-components";
import { TPostCardXlProps } from "./types";
import IconDislike from "../image/IconDislike.png";
import IconLike from "../image/IconLike.png";
import IconMore from "../image/IconMore.png";
import IconSave from "../image/IconSave.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IRootState } from "../Redax/store";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redax/slices/reactionTrackingSlice";

const PostCardM = ({
  postCard: { id, image, date, title },
  isTopicColor,
}: TPostCardXlProps) => {
  const dispatch = useDispatch();

  const isReactionTrackingLike = useSelector(
    (state: IRootState) => state.reactionTracking.like
  );
  const isReactionTrackingDislike = useSelector(
    (state: IRootState) => state.reactionTracking.dislike
  );

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const setisReactionTrackingIncrement = () => dispatch(increment());
  const setisReactionTrackingDecrement = () => dispatch(decrement());

  return (
    <Container key={id}>
      <LinkTitle to={`/selectedPost/${id}`}>
        <Div>
          <Block>
            <BlockImg>
              <Avatar src={image} alt="Image - astronaut" />
            </BlockImg>
          </Block>
          <Block>
            <Date>{date}</Date>
            <Title>{title}</Title>
          </Block>
        </Div>
      </LinkTitle>
      <DivContainer>
        <Response>
          <DivIcon>
            <ResponseImage
              onClick={setisReactionTrackingIncrement}
              $istopiccolor={isTopicColor}
              src={IconLike}
              alt="IconLike"
            />
          </DivIcon>
          {isReactionTrackingLike !== 0 && (
            <Counter>{isReactionTrackingLike}</Counter>
          )}
          <DivIcon>
            <ResponseImage
              onClick={setisReactionTrackingDecrement}
              $istopiccolor={isTopicColor}
              src={IconDislike}
              alt="IconDislike"
            />
          </DivIcon>
          {isReactionTrackingDislike !== 0 && (
            <Counter>{isReactionTrackingDislike}</Counter>
          )}
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
      </DivContainer>
      {isMenuVisible && (
        <MenuDiv>
          <MenuButton>Edit</MenuButton>
          <MenuButton>Delete</MenuButton>
        </MenuDiv>
      )}
    </Container>
  );
};

export default PostCardM;

const Container = styled.article`
  position: relative;
  border-bottom: 1px solid rgba(218, 218, 218, 1);
`;

const Counter = styled.h2`
  font-size: 15px;
`;

const LinkTitle = styled(Link)`
  font-size: 18px;
  font-weight: 700;
  margin-right: 10px;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;

const Div = styled.div`
  margin-bottom: 30px;
`;
const Block = styled.div``;
const Date = styled.div`
  color: rgba(141, 142, 151, 1);
`;
const DivIcon = styled.div`
  cursor: pointer;
`;
const BlockImg = styled.div`
  width: 100%;
`;
const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  &:hover {
    color: rgba(34, 49, 170, 1);
  }
`;
const Description = styled.p`
  color: rgba(141, 142, 151, 1);
  line-height: 28px;
`;
const Avatar = styled.img`
  width: 100%;
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

const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;
