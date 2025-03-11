import React from "react";
import Badge from "./Badge/components/Badge";
import Badges from "./Badge/components/Badges";
import Banners from "./Banners/components/Banners";
import Banner from "./Banners/components/Banner";
import Tooltips from "./Tooltip/components/index";

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
        <Tooltips.Button>
          {(show: boolean) => {
            return (
              show && (
                <Tooltips.Container
                  title="Archive Notes"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                ></Tooltips.Container>
              )
            );
          }}
        </Tooltips.Button>
        <Tooltips.Button>
          {(show: boolean) => {
            return (
              show && (
                <Tooltips.Container
                  title="Archive Notes"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                ></Tooltips.Container>
              )
            );
          }}
        </Tooltips.Button>
      </Tooltips>
    </main>
  );
};

export default App;
