import React from "react";
import SearchContainer from "./Search/SearchContainer";
import SearchInput from "./Search/SearchInput";
import Tooltip from "./Tooltip/Tooltip";
import { IoMdBrush } from "react-icons/io";
import { MdOutlineImage } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import TooltipContainer from "./Tooltip/TooltipContainer";
import Notes from "./Notes/index";
import useGlobalContext from "./Context/hooks/useGlobalContext";

const App = () => {
  const { allNotes } = useGlobalContext();

  return (
    <main className="main-container">
      <SearchContainer>
        <SearchInput>
          <input type="text" name="" id="" placeholder="New Note..." />
        </SearchInput>
        <TooltipContainer>
          <Tooltip icon={<FaRegCheckSquare />}>
            {(showInfo: boolean) => {
              return showInfo && <p>lorem</p>;
            }}
          </Tooltip>
          <Tooltip icon={<IoMdBrush />}>
            {(showInfo: boolean) => {
              return showInfo && <p>lorem</p>;
            }}
          </Tooltip>
          <Tooltip icon={<MdOutlineImage />}>
            {(showInfo: boolean) => {
              return showInfo && <p>lorem</p>;
            }}
          </Tooltip>
        </TooltipContainer>
      </SearchContainer>

      <Notes>
        <Notes.Grid>
          {/* <Notes.Item>
            <p>lorem ipsum</p>
          </Notes.Item>
          <Notes.Item>
            <p>lorem ipsum</p>
          </Notes.Item>
          <Notes.Item>
            <p>lorem ipsum</p>
          </Notes.Item>
          <Notes.Item>
            <p>lorem ipsum</p>
          </Notes.Item> */}
          {allNotes.map((note) => (
            <Notes.Item key={note.id} id={note.id}>
              {note.title}
            </Notes.Item>
          ))}
        </Notes.Grid>
      </Notes>
    </main>
  );
};

export default App;
