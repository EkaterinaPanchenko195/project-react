import styled from "styled-components";
import BackToHomeButton from "./BackToHomeButton";
import Title from "./Title";
import Input from "./Input";
import BlockForSendingData from "./BlockForSendingData";
import ButtonSign from "./ButtonSign";

const SignUp = () => {
  return (
    <>
      <Container>
        <BlockTitle>
          <BackToHomeButton />
          <Title text={"Sign Up"}></Title>
        </BlockTitle>

        <Form>
          <Input
            placeholder={"Your name"}
            labelName={"Name"}
            isDisabled={false}
            hasError={false}
            type={"text"}
          />
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
          <Input
            placeholder={"Confirm password"}
            labelName={"Confirm password"}
            isDisabled={false}
            hasError={false}
            type={"password"}
          />
          <ButtonSign buttonSignName={"Sign Up"}></ButtonSign>
          <BlockForSendingData
            buttonbackName={"Sign In"}
            description={"Already have an account?"}
          ></BlockForSendingData>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;

const Container = styled.section`
  padding: 30px 0 0 0;
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
