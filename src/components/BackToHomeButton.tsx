import styled from "styled-components";

const BackToHomeButton = () => {
  return (
    <>
      <Button>Back to home</Button>
    </>
  );
};

export default BackToHomeButton;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
`;
