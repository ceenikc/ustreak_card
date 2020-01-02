import React from "react";

const CardBody = ({ children, className, ...rest }) => {
  return (
    <div className={"card__body " + className} {...rest}>
      {children}
    </div>
  );
};

export default CardBody;
