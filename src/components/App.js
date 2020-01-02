import React from "react";
import CardBox from "./CardBox";
import CardItem from "./CardItem";

const App = () => {
  return (
  <div className="container-parent">
    <CardBox boxName="Information" >
      <CardItem/>
      <CardItem/>
    </CardBox>
    <CardBox boxName="Direct Challenge Requests"/>
  </div>
  )
  
};

export default App;
