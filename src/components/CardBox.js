import React from "react";
import CardItem from "./CardItem";

const CardBox = (props) => {
  console.log(props.children);
  return (
    <div className="container">
      <div className="header"></div>
      <div className="list">
        {props.children}
      </div>
    </div>
  );
};

export default CardBox;
