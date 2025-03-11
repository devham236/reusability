import React, { ReactNode } from "react";

const TooltipsButton = ({ children }: { children: ReactNode }) => {
  return <button className="tooltip-button">{children}</button>;
};

export default TooltipsButton;
