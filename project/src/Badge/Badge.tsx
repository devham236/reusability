import React from "react";
import { BadgeProps } from "./types/badgeTypes";

const Badge = ({ children, color, rounded }: BadgeProps) => {
  return (
    <button className={`badge ${color} ${rounded ? "rounded" : "not-rounded"}`}>
      {children}
    </button>
  );
};

export default Badge;
