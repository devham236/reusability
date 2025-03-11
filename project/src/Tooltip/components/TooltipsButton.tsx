import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { TooltipsButtonProps } from "../types/tooltipsTypes";

const TooltipsButton = ({ children }: TooltipsButtonProps) => {
  const [showContainer, setShowContainer] = useState(false);
  return (
    <button
      className="tooltip-button"
      onMouseEnter={() => setShowContainer(true)}
      onMouseLeave={() => setShowContainer(false)}
    >
      <FaInfoCircle />
      {children(showContainer)}
    </button>
  );
};

export default TooltipsButton;
