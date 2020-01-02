import React from "react";

const CardItem = ({ label, value }) => {
  return (
    <div className="list__item">
      <span>{label}</span>
      {value ? <span>{value}</span> : null}
    </div>
  );
};

export default CardItem;


