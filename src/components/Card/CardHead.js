import React from "react";

const CardHead = ({ children, className = "", ...rest }) => {
  return (
    <div className={"card__head " + className} {...rest}>
      {children}
    </div>
  );
};

export default CardHead;
