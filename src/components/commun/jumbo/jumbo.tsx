import React from "react";
import "./jumbo.scss";

export const Jumbo: React.FC<{ background?: string }> = ({
  children,
  background,
}) => {
  return (
    <div className="jumbo">
      <div className="jumbo-content">{children}</div>
    </div>
  );
};
