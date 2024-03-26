import styled from "styled-components";
import { TPostCard } from "./types";
import { useState, useEffect } from "react";
import PostCardS from "./PostCardS";
import leftArrow from "../image/leftArrow.svg";
import rightArrow from "../image/rightArrow.svg";

const SearchResults = ({
  defoltPostCardSData,
  isTopicColor,
}: {
  defoltPostCardSData: TPostCard[];
  isTopicColor: boolean;
}) => {
  const [defoltPostCardS, setDefoltPostCardS] = useState<null | TPostCard[]>(
    null
  );
  useEffect(() => {
    setDefoltPostCardS(defoltPostCardSData);
  });
  return (
    <Container>
      <Title>Search results ‘Astronauts’</Title>
      <BlockS>
        {defoltPostCardS === null
          ? null
          : defoltPostCardS.map((postCard) => (
              <PostCardS
                key={postCard.id}
                isTopicColor={isTopicColor}
                postCard={postCard}
              />
            ))}
      </BlockS>
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

export default SearchResults;

const Container = styled.div`
  width: 70%;
`;
const Title = styled.h2`
  font-size: 56px;
  line-height: 80px;
`;

const BlockS = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
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
