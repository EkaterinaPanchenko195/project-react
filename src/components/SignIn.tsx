import styled from "styled-components";
import BackToHomeButton from "./BackToHomeButton";
import Title from "./Title";
import Input from "./Input";
import BlockForSendingData from "./BlockForSendingData";
import ButtonSign from "./ButtonSign";

const SignIn = () => {
  return (
    <>
      <Container>
        <BlockTitle>
          <BackToHomeButton />
          <Title text={"Sign In"}></Title>
        </BlockTitle>

        <Form>
          <Input
            placeholder={"Your email"}
            labelName={"Email"}
            isDisabled={false}
            hasError={false}
            type={"email"}
          />
          <Input
            placeholder={"Your password"}
            labelName={"Password"}
            isDisabled={false}
            hasError={false}
            type={"password"}
          />
          <Description>Forgot password?</Description>
          <ButtonSign buttonSignName={"Sign In"}/>
          <BlockForSendingData
            buttonbackName={"Sign Up"}
            description={"Don’t have an account?"}
          />
        </Form>
      </Container>
    </>
  );
};

export default SignIn;

const Container = styled.section`
  padding: 30px 0 95px 0;
  width: 60%;
  margin-bottom: 70px;
`;
const BlockTitle = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(218, 218, 218, 1);
  padding: 40px;
`;

const Description = styled.p`
  text-align: start;
`;
