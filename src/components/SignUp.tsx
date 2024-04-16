import styled from "styled-components";
import BackToHomeButton from "./BackToHomeButton";
import Title from "./Title";
import Input from "./Input";
import BlockForSendingData from "./BlockForSendingData";
import ButtonSign from "./ButtonSign";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSignUp } from "../redux/slices/signUp";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate(); // вместо Link
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = useCallback(() => { // useCallback - для мемоизации
    console.log({
      username: name,
      email: email,
      password: password,
    });
    dispatch(
      fetchSignUp({
        username: name,
        email: email,
        password: password,
      })
    );
    navigate("/successfulConfirmation");// вместо Link
  }, [name, email, password]);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder={"Your email"}
            labelName={"Email"}
            isDisabled={false}
            hasError={false}
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder={"Your password"}
            labelName={"Password"}
            isDisabled={false}
            hasError={false}
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder={"Confirm password"}
            labelName={"Confirm password"}
            isDisabled={false}
            hasError={false}
            type={"password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <ButtonSign onClick={signUp} buttonSignName={"Sign Up"}></ButtonSign>
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
  width: 100%;
`;
