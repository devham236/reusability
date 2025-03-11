import React, { ReactNode } from "react";
import { IoMdMail } from "react-icons/io";

const TooltipsContainer = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="tooltip-container">
      <IoMdMail className="icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TooltipsContainer;
