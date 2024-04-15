import PostCardXl from "./PostCardXl";
import PostCardM from "./PostCardM";
import PostCardS from "./PostCardS";
import Menu from "./Menu";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { TPostCard } from "./types";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store";

const ListOfPosts = ({
  isTopicColor,
  defoltPostCardData,
  defoltPostCardMData,
  defoltPostCardSData,
}: {
  isTopicColor: boolean;
  defoltPostCardData: TPostCard[];
  defoltPostCardMData: TPostCard[];
  defoltPostCardSData: TPostCard[];
}) => {
  const [defoltPostCard, setDefoltPostCard] = useState<null | TPostCard[]>(
    null
  );
  const [defoltPostCardM, setDefoltPostCardM] = useState<null | TPostCard[]>(
    null
  );
  const [defoltPostCardS, setDefoltPostCardS] = useState<null | TPostCard[]>(
    null
  );

  const isFavoritesPosts = useSelector(
    (state: IRootState) => state.isFavoritesPosts
  );
  const dataFavoritsPosts = useSelector(
    (state: IRootState) => state.savPosts
  ) as any[];
  const state = useSelector((state: IRootState) => state);

  useEffect(() => {
    setDefoltPostCard(defoltPostCardData);
    setDefoltPostCardM(defoltPostCardMData);
    setDefoltPostCardS(defoltPostCardSData);
  });
  // console.log(state, dataFavoritsPosts);
  return (
    <Block>
      <Menu isTopicColor={isTopicColor} text="Blog" />
      {isFavoritesPosts && dataFavoritsPosts ? (
        <BlockS>
          {dataFavoritsPosts.map((postCard) => (
            <PostCardS
              key={postCard.id}
              isTopicColor={isTopicColor}
              postCard={postCard}
            />
          ))}
        </BlockS>
      ) : (
        <Container>
          <BlockM>
            {defoltPostCard === null
              ? null
              : defoltPostCard.map((postCard) => (
                  <PostCardXl
                    key={postCard.id}
                    isTopicColor={isTopicColor}
                    postCard={postCard}
                  />
                ))}
            <BlockostCardM>
              {defoltPostCardM === null
                ? null
                : defoltPostCardM.map((postCard) => (
                    <PostCardM
                      key={postCard.id}
                      isTopicColor={isTopicColor}
                      postCard={postCard}
                    />
                  ))}
            </BlockostCardM>
          </BlockM>
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
        </Container>
      )}
    </Block>
  );
};

export default ListOfPosts;

const Container = styled.section`
  display: flex;
  column-gap: 32px;
`;
const BlockostCardM = styled.div`
  display: grid;
  grid-template-columns: 40% 40%;
  column-gap: 15%;
  row-gap: 40px;
`;
const BlockS = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
`;
const BlockM = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 65.71%;
  row-gap: 39px;
`;

const Block = styled.div``;
