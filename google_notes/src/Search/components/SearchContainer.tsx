import "../styles/search.css";
import SearchInput from "./SearchInput";
import TooltipContainer from "../../Tooltip/components/TooltipContainer";
import Tooltip from "../../Tooltip/components/Tooltip";
import { FaRegCheckSquare } from "react-icons/fa";
import { IoMdBrush } from "react-icons/io";
import { MdOutlineImage } from "react-icons/md";

const SearchContainer = () => {
  return (
    <section className="search-section">
      <>
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
      </>
    </section>
  );
};

export default SearchContainer;
