import styled from "styled-components";
import BackToHomeButton from "./BackToHomeButton";
import Title from "./Title";
import AccountActivationNotification from "./ AccountActivationNotification";

const SuccessfulConfirmation = () => {
  return (
    <>
      <Container>
        <BlockTitle>
          <BackToHomeButton />
          <Title text={"Registration Confirmation"}></Title>
        </BlockTitle>
        <AccountActivationNotification
          description={
            "Please activate your account with the activation link in the email"
          }
          email={"example@gmail.com."}
          descriptionEmail={"Please, check your email"}
          button={"Go to home"}
        />
      </Container>
    </>
  );
};

export default SuccessfulConfirmation;

const Container = styled.section`
  padding: 30px 0 0 0;
  width: 60%;
  margin-bottom: 395px;
`;
const BlockTitle = styled.div``;
