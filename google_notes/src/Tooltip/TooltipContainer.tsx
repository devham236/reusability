import React, { ReactNode } from "react";

const TooltipContainer = ({ children }: { children: ReactNode }) => {
  return <div className="tooltip-icon-container">{children}</div>;
};

export default TooltipContainer;
