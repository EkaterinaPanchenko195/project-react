import styled from "styled-components";
import Button from "./components/Button";
import User from "./components/User";
import Title from "./components/Title";
import Tabs from "./components/Tabs";
import Input from "./components/Input";
import Textarea from "./components/Textarea";
import ListOfPosts from "./components/ListOfPosts";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const onClick = () => {
    alert("localhost");
  };
  const [isTopicColor, setIsTopicColor] = useState(true);

  return (
    <>
      <Header setIsTopicColor={setIsTopicColor} />
      <Main $isTopicColor={isTopicColor}>
        {/* <Button
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
        <Input
          placeholder="name"
          labelName="User Name"
          isDisabled={false}
          hasError={false}
        />
        <Textarea placeholder="Add your text" labelName="Text" /> */}
        <ListOfPosts isTopicColor={isTopicColor} />
      </Main>
    </>
  );
};

export default App;

const Main = styled.main<{ $isTopicColor: boolean }>`
  ${({ $isTopicColor }) => `
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 0 10%;
  width: 100%;
  background-color: ${
    $isTopicColor ? "rgba(243, 243, 243, 1)" : "rgba(49, 48, 55, 1)"
  };
  color: ${$isTopicColor ? "rgba(49, 48, 55, 1)" : "rgba(255, 255, 255, 1)"};
`}
`;
