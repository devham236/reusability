import React from "react";
import { TooltipsContainerProps } from "../types/tooltipsTypes";

const TooltipsContainer = ({ children }: TooltipsContainerProps) => {
  return <div className="tooltip-container">{children}</div>;
};

export default TooltipsContainer;
