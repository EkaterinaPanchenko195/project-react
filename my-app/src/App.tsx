import styled from "styled-components";
import Button from "./components/Button/Button";
import User from "./components/User/User";
import Title from "./components/Title/Title";
import Tabs from "./components/Tabs/Tabs";

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

const App = () => {
  const onClick = () => {
    alert("localhost");
  };

  return (
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
    </Main>
  );
};

export default App;

const Main = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
