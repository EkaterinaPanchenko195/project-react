import { createSlice } from "@reduxjs/toolkit";
import imageBlock from "../../image/postCard.svg";

const defoltPostCardSData = createSlice({
  name: "reactionTracking",
  initialState: [
    {
      id: 20240129,
      image: imageBlock,
      text: "",
      date: "April 20, 2021",
      //date: Date().split(" ").slice(1, 4).join(" "),
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240120,
      image: imageBlock,
      text: "",
      date: "April 20, 2021",
      //date: Date().split(" ").slice(1, 4).join(" "),
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240121,
      image: imageBlock,
      text: "",
      date: "April 20, 2021",
      //date: Date().split(" ").slice(1, 4).join(" "),
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240122,
      image: imageBlock,
      text: "",
      date: "April 20, 2021",
      //date: Date().split(" ").slice(1, 4).join(" "),
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240123,
      image: imageBlock,
      text: "",
      date: "April 20, 2021",
      //date: Date().split(" ").slice(1, 4).join(" "),
      lesson_num: 0,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
      description:
        "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
      author: 0,
    },
    {
      id: 20240124,
      image: imageBlock,
      text: "",
      date: "April 20, 2021",
      //date: Date().split(" ").slice(1, 4).join(" "),
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

const { actions, reducer } = defoltPostCardSData;
export const {} = actions;
export default reducer;
