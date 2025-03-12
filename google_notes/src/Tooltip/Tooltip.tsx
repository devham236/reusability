import React, { ReactNode, useState } from "react";

const Tooltip = ({
  children,
  icon,
}: {
  children: (showInfo: boolean) => ReactNode;
  icon: ReactNode;
}) => {
  const [showInfo, sethShowInfo] = useState(false);

  return (
    <div
      className="tooltip-icon"
      onMouseEnter={() => sethShowInfo(true)}
      onMouseLeave={() => sethShowInfo(false)}
    >
      {icon}
      <div className="tooltip-text">{children(showInfo)}</div>
    </div>
  );
};

export default Tooltip;
