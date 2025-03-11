import React from "react";
import Badge from "./Badge/components/Badge";
import Badges from "./Badge/components/Badges";
import Banners from "./Banners/components/Banners";
import Banner from "./Banners/components/Banner";
import Tooltips from "./Tooltip/components/index";
import TooltipsButton from "./Tooltip/components/TooltipsButton";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

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
          {(show: boolean) => {
            return (
              show && (
                <div className="tooltip-container">
                  <IoMdMail className="icon" />
                  <h3>Archive Notes</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis temporibus explicabo volupta
                  </p>
                </div>
              )
            );
          }}
        </TooltipsButton>
      </Tooltips>
    </main>
  );
};

export default App;
