import PostCardXl from "./PostCardXl";
import PostCardM from "./PostCardM";
import PostCardS from "./PostCardS";
import Menu from "./Menu";
import imageBlock from "../image/postCard.svg";
import imageM from "../image/PostCardM.svg";
import styled from "styled-components";
const defoltPostCard = [
  {
    id: 20240118,
    image: imageBlock,
    text: "",
    date: "April 20, 2021",
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
];

const defoltPostCardM = [
  {
    id: 20240118,
    image: imageM,
    text: "",
    date: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240119,
    image: imageM,
    text: "",
    date: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240110,
    image: imageM,
    text: "",
    date: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240111,
    image: imageM,
    text: "",
    date: "April 20, 2021",
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
];

const defoltPostCardS = [
  {
    id: 20240129,
    image: imageBlock,
    text: "",
    date: "April 20, 2021",
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240120,
    image: imageBlock,
    text: "",
    date: "April 20, 2021",
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240121,
    image: imageBlock,
    text: "",
    date: "April 20, 2021",
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240122,
    image: imageBlock,
    text: "",
    date: "April 20, 2021",
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240123,
    image: imageBlock,
    text: "",
    date: "April 20, 2021",
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
  {
    id: 20240124,
    image: imageBlock,
    text: "",
    date: "April 20, 2021",
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
];

const ListOfPosts = ({ isTopicColor }: { isTopicColor: boolean }) => {
  return (
    <Block>
      <Menu isTopicColor={isTopicColor} text="Blog" />
      <Container>
        <BlockM>
          {defoltPostCard.map((postCard) => (
            <PostCardXl isTopicColor={isTopicColor} postCard={postCard} />
          ))}
          <BlockostCardM>
            {defoltPostCardM.map((postCard) => (
              <PostCardM isTopicColor={isTopicColor} postCard={postCard} />
            ))}
          </BlockostCardM>
        </BlockM>
        <BlockS>
          {defoltPostCardS.map((postCard) => (
            <PostCardS isTopicColor={isTopicColor} postCard={postCard} />
          ))}
        </BlockS>
      </Container>
    </Block>
  );
};

export default ListOfPosts;

const Container = styled.div`
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
