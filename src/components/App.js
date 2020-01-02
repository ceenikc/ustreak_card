import React from "react";
import Card from "./Card";
import CardHead from "./Card/CardHead";
import CardBody from "./Card/CardBody";
import List from "./List";
import ListItem from "./List/ListItem";

const CardWithList = ({ items, theme = "light" }) => {
  return (
    <Card>
      <CardHead>List</CardHead>
      <CardBody className="i am differen class">
        <List theme={theme}>
          {items.map((item, i) => (
            <ListItem key={i} label={item.label} value={item.value} />
          ))}
        </List>
      </CardBody>
    </Card>
  );
};

const App = () => {
  return (
    <div className="container">
      <Card>
        <CardHead>Information</CardHead>
        <CardBody>djbdjbdjbdbjd</CardBody>
      </Card>
      <Card>
        <CardHead style={{ background: "orange" }}>
          I am just a card head
        </CardHead>
      </Card>
      <Card>
        <CardHead>Card</CardHead>
        <CardBody className="i am differen class">
          <Card>
            <CardHead>Information</CardHead>
            <CardBody>djbdjbdjbdbjd</CardBody>
          </Card>
        </CardBody>
      </Card>
      <CardWithList
        items={[
          { label: "midha", value: "monkey" },
          { label: "midha", value: "monkey" },
          { label: "midha", value: "monkey" },
          { label: "midha", value: "monkey" },
          { label: "midha", value: "monkey" },
          { label: "midha", value: "monkey" }
        ]}
        // theme="light"
      />
    </div>
  );
};

export default App;
