import React from "react";

const List = ({ children, className = "", theme = "dark", ...rest }) => {
  return (
    <ul className={"list " + `list__${theme} ` + className} {...rest}>
      {children}
    </ul>
  );
};

export default List;
