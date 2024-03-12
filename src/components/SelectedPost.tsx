import styled from "styled-components";
import IconLike from "../image/IconLike.png";
import IconSave from "../image/IconSave.png";
import IconDislike from "../image/IconDislike.png";
import { TSelectedPostProps } from "./types";

const SelectedPost = ({ postCard, isTopicColor }: TSelectedPostProps) => {
  const { id, image, title, description } = postCard;
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
     filter:${$istopiccolor ? "invert(1)" : "nvert(0)"};
`}
  margin-right:5px
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
`;
