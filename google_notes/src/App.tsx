import React from "react";
import SearchContainer from "./Search/components/SearchContainer";
import SearchInput from "./Search/components/SearchInput";
import Tooltip from "./Tooltip/components/Tooltip";
import { IoMdBrush } from "react-icons/io";
import { MdOutlineImage } from "react-icons/md";
import { FaRegCheckSquare } from "react-icons/fa";
import TooltipContainer from "./Tooltip/components/TooltipContainer";
import Notes from "./Notes/components/index";
import useGlobalContext from "./Context/hooks/useGlobalContext";

const App = () => {
  const { allNotes } = useGlobalContext();

  return (
    <main className="main-container">
      <SearchContainer>
        <SearchInput>New Note..</SearchInput>
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
        <Notes.Display>
          {(length) => {
            return length > 0 ? (
              <Notes.Grid>
                {allNotes.map((note) => (
                  <Notes.Item key={note.id} id={note.id}>
                    {note.title}
                  </Notes.Item>
                ))}
              </Notes.Grid>
            ) : (
              <Notes.Placeholder>
                <p>You don't have any Notes yet.</p>
              </Notes.Placeholder>
            );
          }}
        </Notes.Display>
      </Notes>
    </main>
  );
};

export default App;
