import React, { ReactNode } from "react";
import { IoMdMail } from "react-icons/io";

const TooltipsButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="tooltip-button">
      {children}
      <div className="tooltip-container">
        <IoMdMail className="icon" />
        <h3>Archive Notes</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          temporibus explicabo volupta
        </p>
      </div>
    </button>
  );
};

export default TooltipsButton;
