import React, { ReactElement, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";

const TooltipsButton = ({ children }: { children: ReactElement }) => {
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
