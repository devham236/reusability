import React from "react";
import { BadgeProps } from "../types/badgeTypes";

const Badge = ({
  children = "Badge",
  color = "grey",
  rounded = false,
}: BadgeProps) => {
  return (
    <button className={`badge ${color} ${rounded ? "rounded" : "not-rounded"}`}>
      {children}
    </button>
  );
};

export default Badge;
