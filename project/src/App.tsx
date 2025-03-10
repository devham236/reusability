import React from "react";
import Badge from "./Badge/components/Badge";
import Badges from "./Badge/components/Badges";

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
    </main>
  );
};

export default App;
