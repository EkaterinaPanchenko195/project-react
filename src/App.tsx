import styled from "styled-components";
import ListOfPosts from "./components/ListOfPosts";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import SuccessfulConfirmation from "./components/SuccessfulConfirmation";
import Success from "./components/Success";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import SelectedPost from "./components/SelectedPost";
import SelectedPostImg from "./image/SelectedPost.svg";
import { TPostCard } from "./components/types";
import { Route, Routes, useParams } from "react-router-dom";
import AddPost from "./components/AddPost";
import WrongAddress from "./components/WrongAddress";
// import SearchResults from "./components/SearchResults ";
// import Button from "./components/Button";
// import User from "./components/User";
// import Title from "./components/Title";
// import Tabs from "./components/Tabs";
// import Input from "./components/Input";
// import Textarea from "./components/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { toggleColor } from "./redux/slices/IsTopicColorSlice";
import { IRootState } from "./redux/store";

const postCard: TPostCard[] = [
  {
    id: 1,
    image: SelectedPostImg,
    text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.     During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City. The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.",
    date: "2024-01-18",
    lesson_num: 1,
    title:
      "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    description:
      "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest auction result.The demand for Maggi Hambling’s evocative portraits and exuberant depictions of seascapes and landscapes surged this past week, when the number of collectors inquiring on her work increased more than tenfold from the week before. The British artist, esteemed for her whirling, gestural paintings and bold public sculptures, has seen a consistent wave of interest in her work that has accelerated in the past few years. This recent uptick in interest  is consistent with Hambling’s career trajectory, which has been punctuated by a flurry of public commissions, institutional recognition, and secondary-market demand.Add to favorites",
    author: 1,
  },
];

const App = () => {
  const dispatch = useDispatch();

  const isTopicColor = useSelector((state: IRootState) => state.isTopicColor);
  const defoltPostCardData = useSelector(
    (state: IRootState) => state.defoltPostCardData
  );
  const defoltPostCardMData = useSelector(
    (state: IRootState) => state.defoltPostCardMData
  );
  const defoltPostCardSData = useSelector(
    (state: IRootState) => state.defoltPostCardSData
  );

  const setIsTopicColor = () => dispatch(toggleColor());

  return (
    <>
      <Header setIsTopicColor={setIsTopicColor} />
      <Main $isTopicColor={isTopicColor}>
        <Routes>
          <Route path="*" element={<WrongAddress />}></Route>
          <Route
            index
            path="/home"
            element={
              <ListOfPosts
                defoltPostCardData={defoltPostCardData}
                defoltPostCardMData={defoltPostCardMData}
                defoltPostCardSData={defoltPostCardSData}
                isTopicColor={isTopicColor}
              />
            }
          ></Route>
          <Route path="/addPost" element={<AddPost />} />
          <Route
            path="/selectedPost/:id"
            element={
              <SelectedPost
                postCard={postCard[0]}
                isTopicColor={isTopicColor}
              />
            }
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/success" element={<Success />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/successfulConfirmation"
            element={<SuccessfulConfirmation />}
          />
        </Routes>
        {/* <ListOfPosts
          defoltPostCardData={defoltPostCardData}
          defoltPostCardMData={defoltPostCardMData}
          defoltPostCardSData={defoltPostCardSData}
          isTopicColor={isTopicColor}
        /> */}
        {/* <SuccessfulConfirmation/> */}
        {/* <Success /> */}
        {/* <SignIn/> */}
        {/* <SelectedPost
          postCard={postCard[0]}
          isTopicColor={isTopicColor}
        ></SelectedPost> */}
        {/* <SearchResults
          defoltPostCardSData={defoltPostCardSData}
          isTopicColor={isTopicColor}
        /> */}
        <Footer />
      </Main>
    </>
  );
};

export default App;

const Main = styled.main<{ $isTopicColor: boolean }>`
  ${({ $isTopicColor }) => `
  box-sizing: border-box;
  padding: 0 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${
    $isTopicColor ? "rgba(243, 243, 243, 1)" : "rgba(49, 48, 55, 1)"
  };
  color: ${$isTopicColor ? "rgba(49, 48, 55, 1)" : "rgba(255, 255, 255, 1)"};
  `}
`;
{
  /* <Button
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
<Textarea placeholder="Add your text" labelName="Text" /> */
}
