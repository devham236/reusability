import React from "react";
import SearchContainer from "./Search/SearchContainer";
import SearchInput from "./Search/SearchInput";
import Tooltip from "./Tooltip/Tooltip";
import { IoMdBrush } from "react-icons/io";
import { MdOutlineImage } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import TooltipContainer from "./Tooltip/TooltipContainer";
import Notes from "./Notes/index";

const App = () => {
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
          <Notes.Item></Notes.Item>
        </Notes.Grid>
      </Notes>
    </main>
  );
};

export default App;
