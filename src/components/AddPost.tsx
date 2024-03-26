import styled from "styled-components";
import Title from "./Title";
import BackToHomeButton from "./BackToHomeButton";
import Input from "./Input";
import Textarea from "./Textarea";

const AddPost = () => {
  return (
    <Container>
      <BlockTitle>
        <BackToHomeButton />
        <Title text={"Add post"}></Title>
      </BlockTitle>
      <Form>
        <Input
          placeholder={"Title"}
          labelName={"Title"}
          isDisabled={false}
          hasError={false}
          type={"text"}
        />
        <Input
          placeholder={""}
          labelName={"Lesson number"}
          isDisabled={false}
          hasError={false}
          type={"number"}
        />
        <Input
          placeholder={""}
          labelName={"Image"}
          isDisabled={false}
          hasError={false}
          type={"file"}
        />
        <Input
          placeholder={"Add your text"}
          labelName={"Description"}
          isDisabled={false}
          hasError={false}
          type={"text"}
        />
        <Textarea labelName={"Text"} placeholder={"Add your text"} />
        <ContainerNav>
          <ButtonDelete>Delete post</ButtonDelete>
          <TwoButton>
            <Button>Cancel</Button>
            <ButtonBlue>Add post</ButtonBlue>
          </TwoButton>
        </ContainerNav>
      </Form>
    </Container>
  );
};

export default AddPost;

const Container = styled.div``;
const BlockTitle = styled.div``;
const Form = styled.form``;
const ButtonDelete = styled.button`
  color: rgba(253, 52, 25, 1);
  background-color: transparent;
  font-size: 18px;
  border: none;
  width: 125px;
  height: 56px;
  cursor: pointer;
  font-weight: 600;
`;
const TwoButton = styled.div`
  display: flex;
  gap: 24px;
`;
const Button = styled.div`
  background-color: rgba(232, 232, 232, 1);
  padding: 20px 30px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  border: none;
  color: rgb(0, 0, 0);
`;
const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;
  align-items: center;
`;
const ButtonBlue = styled.button`
  background-color: rgba(34, 49, 170, 1);
  padding: 20px 30px;
  text-align: center;
  cursor: pointer;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-weight: 600;
  border: none;
`;
