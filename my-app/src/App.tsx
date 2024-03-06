import styled from "styled-components";
import Button from "./components/Button";
import User from "./components/User";
import Title from "./components/Title";
import Tabs from "./components/Tabs";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import PostCardXl from "./components/PostCardXl";
import imageBlock from "./image/postCard.svg";
import imageM from "./image/PostCardM.svg";
import PostCardM from "./components/PostCardM";

const defaultTabs = [
  {
    id: 0,
    isActive: true,
    text: "All",
    isDisabled: false,
  },
  {
    id: 1,
    isActive: false,
    text: "My favorites",
    isDisabled: false,
  },
  {
    id: 2,
    isActive: false,
    text: "Popular",
    isDisabled: true,
  },
];

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
    //date: Date().split(" ").slice(1, 4).join(" "),
    lesson_num: 0,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
    author: 0,
  },
];
const App = () => {
  const onClick = () => {
    alert("localhost");
  };

  return (
    <>
      <Main>
        <User userName="Artem Malkin" />
        <Button
          buttonType="primary"
          isDisabled={false}
          text="Primary"
          onClick={onClick}
        />
        <Button
          buttonType="secondary"
          isDisabled={false}
          text="Secondary"
          onClick={onClick}
        />
        <Button
          buttonType="critical"
          isDisabled={false}
          text="critical"
          onClick={onClick}
        />
        <Title text="Sign In" />
        <Tabs tabs={defaultTabs} />
        <Input
          placeholder="name"
          labelName="User Name"
          isDisabled={false}
          hasError={false}
        />
        <Textarea placeholder="Add your text" labelName="Text" />
      </Main>
      <PostCardXl postCard={defoltPostCard}></PostCardXl>
      <PostCardM postCard={defoltPostCardM}></PostCardM>
    </>
  );
};

export default App;

const Main = styled.main`
  margin: 50px;
  padding: 0;
  box-sizing: border-box;
`;
