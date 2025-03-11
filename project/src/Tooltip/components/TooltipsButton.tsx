import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const TooltipsButton = ({ children }) => {
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
