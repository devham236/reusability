import React from "react";
import Badge from "./Badge/Badge";

const App = () => {
  return (
    <main className="main-container">
      <Badge color={"grey"} rounded={true}>
        Badge
      </Badge>
      <Badge color={"red"} rounded={false}>
        Badge
      </Badge>
      <Badge color={"yellow"}>Badge</Badge>
    </main>
  );
};

export default App;
