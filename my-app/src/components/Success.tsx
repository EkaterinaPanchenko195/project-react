import styled from "styled-components";
import BackToHomeButton from "./BackToHomeButton";
import Title from "./Title";
import AccountActivationNotification from "./ AccountActivationNotification";

const Success = () => {
  return (
    <>
      <Container>
        <BlockTitle>
          <BackToHomeButton />
          <Title text={"Success"}></Title>
        </BlockTitle>
        <AccountActivationNotification
          description={"Email confirmed."}
          descriptionEmail={"Your registration is now completed"}
          button={"Go to home"}
        />
      </Container>
    </>
  );
};

export default Success;

const Container = styled.section`
  padding: 30px 0 20px 0;
  width: 60%;
  margin-bottom: 405px;
`;

const BlockTitle = styled.div``;
