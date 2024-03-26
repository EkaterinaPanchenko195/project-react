import styled from "styled-components";
import Title from "./Title";

const WrongAddress = () => {
  return (
    <Container>
      <Title text={"Something went wrong"} />
    </Container>
  );
};

export default WrongAddress;

const Container = styled.div`
  padding: 30px 0 20px 0;
  width: 60%;
  margin-bottom: 63%;
`;
