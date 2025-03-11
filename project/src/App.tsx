import React from "react";
import Badge from "./Badge/components/Badge";
import Badges from "./Badge/components/Badges";
import Banners from "./Banners/components/Banners";
import Banner from "./Banners/components/Banner";
import Tooltips from "./Tooltip/components/index";
import TooltipsButton from "./Tooltip/components/TooltipsButton";
import { FaInfoCircle } from "react-icons/fa";

const App = () => {
  return (
    <main className="main-container">
      <Badges>
        <Badge color={"grey"} rounded={true}>
          Badge
        </Badge>
        <Badge color={"red"} rounded={false}>
          Badge
        </Badge>
        <Badge color={"yellow"}>Badge</Badge>
      </Badges>

      <Banners>
        <Banner></Banner>
      </Banners>

      <Tooltips>
        <TooltipsButton>
          <FaInfoCircle />
        </TooltipsButton>
      </Tooltips>
    </main>
  );
};

export default App;
