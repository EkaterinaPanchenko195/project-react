import { createSlice } from "@reduxjs/toolkit";
import imageM from "../../image/PostCardM.svg";

const defoltPostCardMData = createSlice({
  name: "reactionTracking",
  initialState: [
    {
      id: 20240118,
      image: imageM,
      text: "",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240119,
      image: imageM,
      text: "",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240110,
      image: imageM,
      text: "",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240111,
      image: imageM,
      text: "",
      date: "April 20, 2021",
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
  ],
  reducers: {},
});

const { actions, reducer } = defoltPostCardMData;
export const {} = actions;
export default reducer;
