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
      <Badge color={"yellow"} rounded={true}>
        Badge
      </Badge>
      <Badge color={"green"} rounded={false}>
        Badge
      </Badge>
      <Badge color={"blue"} rounded={true}>
        Badge
      </Badge>
      <Badge color={"indigo"} rounded={false}>
        Badge
      </Badge>
      <Badge color={"purple"} rounded={true}>
        Badge
      </Badge>
      <Badge color={"pink"} rounded={false}>
        Badge
      </Badge>
    </main>
  );
};

export default App;
