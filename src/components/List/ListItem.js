import React from "react";

const ListItem = ({ children, className = "", value, label, ...rest }) => {
  return (
    <li className={"list__item " + className} {...rest}>
      {value && label ? (
        <div className="list__item__info">
          <div className="list__item__info__label">{label}</div>
          <div className="list__item__info__value">{value}</div>
        </div>
      ) : (
        children
      )}
    </li>
  );
};

export default ListItem;
