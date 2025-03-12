import React, { ReactNode } from "react";
import "../styles/tooltip.css";

const TooltipContainer = ({ children }: { children: ReactNode }) => {
  return <div className="tooltip-icon-container">{children}</div>;
};

export default TooltipContainer;
