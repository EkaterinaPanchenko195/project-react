import styled from "styled-components";
import IconLike from "../image/IconLike.png";
import IconSave from "../image/IconSave.png";
import IconDislike from "../image/IconDislike.png";
import { TSelectedPostProps } from "./types";
import rightArrow from "../image/rightArrow.svg";
import leftArrow from "../image/leftArrow.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../redux/slices/transitionToPost";
import { useEffect } from "react";
import { IRootState } from "../redux/store";

const SelectedPost = ({ isTopicColor }: TSelectedPostProps) => {
  const { id } = useParams<string>(); // достает id из адресной строки
  const dispatch = useDispatch()<any>;
  const post = useSelector(
    (state: IRootState) => state.transitionToPost.selectedPost
  );
  console.log(post);

  useEffect(() => {
    typeof id === "string" && dispatch(fetchPost(id));
  }, []);

  if (!post) {
    return null;
  }

  const { image, title, description } = post;

  return (
    <Container key={id}>
      <Block>
        <Title>{title}</Title>
        <BlockImg>
          <Avatar src={image} alt="Image - astronaut" />
        </BlockImg>
      </Block>
      <Div>
        <Block>
          <Description>{description}</Description>
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
        <ResponseButton>
          <DivIcon>
            <ResponseImage
              $istopiccolor={isTopicColor}
              src={IconSave}
              alt="IconSave"
            />
          </DivIcon>
          <DescriptionButton>Add to favorites</DescriptionButton>
        </ResponseButton>
      </Div>
      <Navigation>
        <NavigationDiv>
          <NavigationBlockImg>
            <NavigationImg
              src={rightArrow}
              alt="rightArrow"
              $istopiccolor={isTopicColor}
            />
          </NavigationBlockImg>
          <NavigationDescription>Prev</NavigationDescription>
        </NavigationDiv>

        <NavigationDiv>
          <NavigationDescription>Next</NavigationDescription>
          <NavigationBlockImg>
            <NavigationImg
              src={leftArrow}
              alt="leftArrow"
              $istopiccolor={isTopicColor}
            />
          </NavigationBlockImg>
        </NavigationDiv>
      </Navigation>
    </Container>
  );
};

export default SelectedPost;

const Container = styled.article`
  aspect-ratio: 736 / 452;
  border-bottom: 1px solid rgba(218, 218, 218, 1);
  position: relative;
  width: 60%;
  padding-top: 72px;
`;

const Div = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 41px;
`;
const Block = styled.div`
  margin-bottom: 48px;
`;
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
const Avatar = styled.img`
  width: 100%;
`;
const Response = styled.div`
  display: flex;
  gap: 24px;
`;
const ResponseImage = styled.img<{ $istopiccolor: boolean }>`
  ${({ $istopiccolor }) => `
     filter:${$istopiccolor ? "invert(1)" : "invert(0)"};
`}
  margin-right:5px;
`;

const ResponseButton = styled.div`
  cursor: pointer;
  padding: 16px 22px;
  background-color: rgb(232 232 232);
  display: flex;
  align-items: center;
`;
const DescriptionButton = styled.p`
  margin: 0;
  color: rgba(49, 48, 55, 1);
`;
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(218, 218, 218, 1);
  padding-top: 50px;
  padding-bottom: 50px;
`;
const NavigationDiv = styled.div`
  display: flex;
  cursor: pointer;
`;
const NavigationBlockImg = styled.div`
  &:first-child {
    margin-right: 10px;
  }
`;
const NavigationImg = styled.img<{ $istopiccolor: boolean }>`
  ${({ $istopiccolor }) => `
filter:${$istopiccolor ? "invert(0)" : "invert(1)"};
`}
`;
const NavigationDescription = styled.div`
  &:first-child {
    margin-right: 10px;
  }
`;
